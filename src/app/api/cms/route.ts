import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { getDefaultCMSData, type CMSData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      source: "default",
      data: getDefaultCMSData(),
      configured: false,
    });
  }

  const supabase = getSupabaseServer();
  if (!supabase) {
    return NextResponse.json({
      source: "default",
      data: getDefaultCMSData(),
      configured: false,
    });
  }

  const { data: row, error } = await supabase
    .from("site_content")
    .select("data, updated_at")
    .eq("id", "main")
    .maybeSingle();

  if (error) {
    console.error("CMS GET error:", error.message);
    return NextResponse.json(
      { error: error.message, configured: true, source: "error" },
      { status: 500 }
    );
  }

  const defaults = getDefaultCMSData();
  const stored = (row?.data || {}) as Partial<CMSData>;

  const merged: CMSData = {
    ...defaults,
    ...stored,
    profile: { ...defaults.profile, ...(stored.profile || {}) },
    siteSettings: { ...defaults.siteSettings, ...(stored.siteSettings || {}) },
    experiences: stored.experiences ?? defaults.experiences,
    services: stored.services ?? defaults.services,
    skills: stored.skills ?? defaults.skills,
    projects: stored.projects ?? defaults.projects,
    caseStudies: stored.caseStudies ?? defaults.caseStudies,
    articles: stored.articles ?? defaults.articles,
    certifications: stored.certifications ?? defaults.certifications,
    testimonials: stored.testimonials ?? defaults.testimonials,
    capabilities: stored.capabilities ?? defaults.capabilities,
    news: stored.news ?? defaults.news,
    updatedAt: row?.updated_at || stored.updatedAt || defaults.updatedAt,
  };

  return NextResponse.json({
    source: row ? "supabase" : "default",
    data: merged,
    configured: true,
  });
}

export async function PUT(req: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      {
        error:
          "Supabase not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        configured: false,
      },
      { status: 503 }
    );
  }

  const supabase = getSupabaseServer();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase client failed" }, { status: 503 });
  }

  let body: CMSData;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload = {
    ...body,
    updatedAt: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("site_content")
    .upsert(
      {
        id: "main",
        data: payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    )
    .select("updated_at")
    .single();

  if (error) {
    console.error("CMS PUT error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    updated_at: data?.updated_at,
    source: "supabase",
  });
}
