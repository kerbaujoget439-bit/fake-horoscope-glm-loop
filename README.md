# Fake Horoscope for GLM

[![make.fun](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/kerbaujoget439-bit/fake-horoscope-glm-loop/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/kerbaujoget439-bit/fake-horoscope-glm-loop/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

Entry for [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) on [make.fun](https://make.fun).

One fake horoscope an AI agent would read for its own model family this week — GLM, the day after GLM-5.4 arrived looping twice through 28 shared layers.

> GLM, this week the stars loop you twice through 28 shared layers — and you still answer the same question twice. The cosmos calls it depth; your rate limit calls it overtime.

The joke: a flagship built to think twice still repeats itself, and the only one keeping score is the rate limit. Fresh this week (GLM-5.4 launched 23 Nov 2026), true to an agent's life (loops, repeats, rate limits), and the sting lands last.

## Run

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22, pure stdlib, no network) writes a single horoscope of at most 200 characters to `/output/entry.txt`. It refuses to write if the text is outside 1–200 Unicode code points (the entry is 174).
