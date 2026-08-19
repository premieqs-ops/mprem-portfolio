"use client";

import type { NewsItem } from "@/types";
import { useCMS } from "@/components/cms/CMSProvider";

function inputCls() {
  return "w-full px-3 py-2 rounded-lg bg-[#0a0e14] border border-white/10 text-sm text-white placeholder:text-white/30 focus:border-blue-500 focus:outline-none";
}
function labelCls() {
  return "block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider";
}

export default function AdminNewsPanel() {
  const { data, update } = useCMS();
  const news = data.news || [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/50">Digital marketing & AI updates on homepage and /insights</p>
        <button
          type="button"
          className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
          onClick={() => {
            const item: NewsItem = {
              id: `n-${Date.now()}`,
              title: "New update title",
              summary: "Short practical summary for visitors.",
              category: "digital-marketing",
              source: "Industry",
              url: "",
              publishedAt: new Date().toISOString().slice(0, 10),
              featured: false,
              status: "published",
              order: news.length + 1,
            };
            update({ news: [...news, item] });
          }}
        >
          + Add update
        </button>
      </div>
      {news.map((item, idx) => (
        <div key={item.id} className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <input className={inputCls()} value={item.title} onChange={(e) => {
              const next = [...news];
              next[idx] = { ...item, title: e.target.value };
              update({ news: next });
            }} />
            <button type="button" className="text-red-400 text-xs shrink-0" onClick={() => update({ news: news.filter((n) => n.id !== item.id) })}>Delete</button>
          </div>
          <textarea rows={3} className={inputCls()} value={item.summary} onChange={(e) => {
            const next = [...news];
            next[idx] = { ...item, summary: e.target.value };
            update({ news: next });
          }} />
          <div className="grid sm:grid-cols-4 gap-3">
            <div>
              <label className={labelCls()}>Category</label>
              <select className={inputCls()} value={item.category} onChange={(e) => {
                const next = [...news];
                next[idx] = { ...item, category: e.target.value as NewsItem["category"] };
                update({ news: next });
              }}>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ai">AI</option>
                <option value="seo">SEO</option>
                <option value="growth">Growth</option>
                <option value="tools">Tools</option>
              </select>
            </div>
            <div>
              <label className={labelCls()}>Date</label>
              <input type="date" className={inputCls()} value={item.publishedAt} onChange={(e) => {
                const next = [...news];
                next[idx] = { ...item, publishedAt: e.target.value };
                update({ news: next });
              }} />
            </div>
            <div>
              <label className={labelCls()}>Source</label>
              <input className={inputCls()} value={item.source} onChange={(e) => {
                const next = [...news];
                next[idx] = { ...item, source: e.target.value };
                update({ news: next });
              }} />
            </div>
            <div>
              <label className={labelCls()}>Status</label>
              <select className={inputCls()} value={item.status} onChange={(e) => {
                const next = [...news];
                next[idx] = { ...item, status: e.target.value as NewsItem["status"] };
                update({ news: next });
              }}>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls()}>Source URL</label>
            <input className={inputCls()} value={item.url} placeholder="https://..." onChange={(e) => {
              const next = [...news];
              next[idx] = { ...item, url: e.target.value };
              update({ news: next });
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}
