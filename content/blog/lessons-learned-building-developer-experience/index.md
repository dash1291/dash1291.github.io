---
title: Lessons learned building developer experience
date: 2022-01-31T18:04:02.428Z
description: I've spent a big fraction of my time at Grofers building tools for
  developers to be productive in shipping their applications to users. The
  problems in focus have changed, but there were common ideas in terms of
  principles behind solving the problems.
---
I've spent a big fraction of my time at Grofers building tools for developers to be productive in shipping their applications to users. The problems in focus have changed, but there were common ideas in terms of principles behind solving the problems.

Since I started out, we undertook many initiatives and they all varied in their levels of success. Some became success stories that we wanted to replicate whenever a new problem was at hand and some became examples that we used as cautionary tales whenever we planned a new initiative. In this post, I'll take examples of some of those initiatives and use them as context for explaining some of the lessons that I've learned while building platforms/tools for developers.



## Good ideas might fail if timed wrong

When we wanted to bring in automated testing, we were struggling with an environment of tightly coupled services which had to be tested together. Creating an integration environment seemed like a daunting task and also the complexity that would come with it was dreadful. Around this time, we started exploring the idea of contract testing. Contract testing through pact seemed like a perfect testing environment that we could have setup for scale. We dreamt of contract tests cleanly defined between every pair of microservices and the tests running like clockwork giving us the fastest possible CI/CD runs and developer feedback. But it all seemed too good (or soon) to be true.

At a point in our CI/CD journey, where we needed a few easy-to-implement release verification tests, we were trying to make the leap to contract tests, totally skipping the essential step of having a few business-facing functional tests. There was nothing wrong with our vision, just the timing and effort were placed wrong. We couldn’t sustain the initiative for long due to the complexity of writing and maintaining contract tests and the lack of any true value driven by the premature adoption.

## Make users successful in each increment

Start small and make the experiment successful and then think about scaling. Premature scaling comes with its own chaos. When you think you’ve got a nice idea, it may be natural for you to want it to impact as big an audience as possible. This can lead to many problems. First of all, it may not be the right time for the idea. Premature scaling in this case amplifies the problem of a good idea timed wrong.

When solving a new problem, with all the diligence put towards the solution, you might still end up with rough edges. When you scale it too early, you might end up with a half-baked solution affecting too many people. At this point, making changes at scale can be quite difficult. Getting feedback is a lot more difficult because it may be fragmented. Worst of all, a bad experience can make devs lose faith in the solution.

This is what happened to us when we worked with Pact. We asked all teams within a tech division to start writing pact tests with whatever understanding and tooling that we had. Turned out that we missed a lot of know-how, and tooling to make any team succeed with a pact. At this time, the rejection of pact as a tooling had crept in and it became very hard to solve any of the challenges and get back on the track.

Instead, treat your platform like a product with a few alpha users trying out your solution first. Work with them on helping them adopt, keep a tight feedback loop and release improvements first. As your platform solves problems for these users, look for users who face the same problem and solve it for them. This is when you might end up discovering a few tweaks that may have to be done to make the solution more generic.

## Listen to devs more and often

Falling into the trap of thinking devs don't know what they need can keep you away from giving them what they really need. This should affect your prioritization a lot. At times, you might see a big problem and you think it’s something that devs may not think about and so you’re naturally inclined towards solving it. But in that process, there are chances that you might miss solving problems that developers face all the time and solving which might even be a lot easier.

Taking example for context - there was a time when we spent a few quarters exploring modern cloud-native tooling for CI/CD along with a few other enhancements. Of course, there was a rationale behind all of those initiatives, but it was entirely based on our world view. This is where we may have missed a lot of small to medium projects which would have delivered direct value to developers which they’d actually appreciate instead of spending time understanding and integrating tools which they don’t really see as changing much. This is definitely not to say that prioritization of longer term exploratory projects is bad, but concentrating focus entirely on them and missing out on smaller opportunities in the process can lead to a value gap which if not closed can leave developers doubting your platform.

## It's never fully done

Some way to keep a check on health is important. best if you have metrics. if not, then depend on qualitative feedback from devs. talk to them. run surveys. Pay attention to feedback and their troubles. Lot of this I saw when we worked on the Hara dhara project. This project, because it was so complex, had a lot of room for things going wrong. Every now and then we’d fix things and we’d get a stable system but that never became a norm. Our developers were usually frustrated for this reason. For them, it didn’t matter that we made it work for some time, but that it didn’t work when they needed it the most. And that is true for any platform or product. Another truth is that it’ll always have stability issues at some level and that’s fine. What may not be fine is that you don’t know how unstable your platform is until 10 developers (or users) scream at you on a public Slack channel. This is where the need for ways to judge stability proactively comes in. After a while of responding to the screaming, we started investing into dashboards and alerts. We also started doing surveys which asked questions like -

**How many hours on average daily do you get blocked waiting for pipelines to finish?**

Some answered 0-2 hours. Some ranged in 4-6 hours. 4 to 6 hours in a day!