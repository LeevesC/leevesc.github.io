export const blog_posts = [
  {
    id: 1,
    time: "09:15",
    date: { day: 14, month: "Apr", year: 2026 },
    title: "Why Systems Analysts Should Learn SQL Before Python",
    content:
      "Most analysts reach for Python first, but SQL is where the real leverage lives. A well-written query replaces hours of pandas wrangling — and it runs closer to the data. I spent three months pushing everything through dataframes before realising my bottleneck was never compute, it was always the join logic. Start with SQL. Add Python when the query can't do it.",
    tags: ["Systems Analysis", "Data", "SQL"],
  },
  {
    id: 2,
    time: "14:42",
    date: { day: 28, month: "Mar", year: 2026 },
    title: "Process Mapping Before Any Automation — Always",
    content:
      "The RiseHigh pipeline project taught me this the hard way. We automated a manual step that turned out to be a quality gate disguised as friction. The script ran perfectly and quietly introduced bad data for two weeks. Map the process end-to-end first. Understand why each step exists. Then automate — but only the steps that should be automated.",
    tags: ["Automation", "Process Mapping", "Lessons"],
  },
  {
    id: 3,
    time: "11:00",
    date: { day: 5, month: "Mar", year: 2026 },
    title: "What NBN Fault Analysis Taught Me About Incident Reporting",
    content:
      "After tracing hundreds of NBN order failures across FTTN, FTTP, and HFC infrastructure, a pattern emerged: the incident reports that actually got fixed were the ones that named the failure mode, not just the symptom. 'Service not provisioned' is a symptom. 'POI capacity exhausted at exchange level causing CVC queue drop' is a failure mode. Precision in reporting is a skill worth building deliberately.",
    tags: ["NBN", "Diagnostics", "Writing"],
  },
  {
    id: 4,
    time: "08:30",
    date: { day: 18, month: "Feb", year: 2026 },
    title: "Finishing My M.Sc. in Data Science: What Surprised Me",
    content:
      "I expected the hardest part to be the statistics. It turned out to be scoping. Every project that struggled had the same problem — an overfit question that the data couldn't answer cleanly. The discipline of narrowing scope, committing to one well-defined question, and resisting scope creep mid-analysis: that is the skill the degree actually trained. The maths is learnable. Scope control is harder.",
    tags: ["Data Science", "Study", "University of Adelaide"],
  },
  {
    id: 5,
    time: "16:05",
    date: { day: 30, month: "Jan", year: 2026 },
    title: "API Integration Is a Communication Problem First",
    content:
      "Every integration project I have worked on has failed or stalled for the same reason — two teams held different assumptions about the contract. The schema said one thing, the actual payload said another, and nobody checked until something broke in production. Before writing a single line of integration code, get both sides in a room, print the API docs, and walk through a real request together. The technical work is straightforward after that.",
    tags: ["API Integration", "Automation", "Communication"],
  },
];
