---
title: "Notes on Agile Testing"
date: 2019-01-29
---

I recently started reading [Agile Testing book](https://books.google.co.in/books/about/Agile_Testing.html?id=68_lhPvoKS8C&redir_esc=y) and while I was learning a bunch of things and taking notes I figured it'd be nice to also share these notes here. Mostly, in order to make it easy for myself to give to someone, my version of the summary of the book. It might be work in progress for a while, but hopefully covering something helpful.

## On agile testing mind-set

* Creativity, openness to ideas, willingness to take on any task or role, focus on the customer and a constant view of the big picture are some components of the agile testing mind-set.

* Agile testing mind-set is one that is results-oriented, craftsman-like, collaborative, eager to learn, and passionate about delivering business value.

* Some of the ten principles for agile testers -

    * continuous feedback

    * keeping testing and tooling simple

    * retrospective: continuous improvement and responding to change

    * customer first

* To keep things simple doesn’t mean keep it easy. It means “just enough”. Agile testing should start with the lightest weight possible and whatever does the job. Tools can be as simple as a spreadsheet or a checklist. Smoke tests might be enough for a business facing test suite.

## On agile testing practices

* It’s upto the customers (business) to decide what level of quality they want to pay for (including performance and security). The testers should support this level of testing through information (For making decisions) and tooling to achieve the required testing.
* Impediment backlog of things that prevent agile team members from being at their productive best.

## On building an agile testing team

* Agile teams is a good place for testers, because true agile teams are all about repeatable quality.

* A job description for the agile tester should include cross functional experience -

    * An example:

        * Experience writing UI tests and helping business experts define requirements

        * Experience writing SQL queries

        * At least one year of experience working with a programming / scripting language

        * Ability to use unix

        * Experience communication with programmers and product owners

* Face-to-face communication has no substitute. Agile development depends on constant collaboration. Like other agile team members, the people doing testing tasks will continually seek out customer and technical team members to discuss and collaborate.

## On test automation

* Even with improved object recognition, scripts created with record and replay tend to be brittle and unmaintainable

* With the reference of the famous [testing pyramid](https://martinfowler.com/bliki/TestPyramid.html), the top tier (UI tests) should make the smallest automation effort, because these tests provide the lowest ROI. These tests are expensive to write, maintain and execute. They are written after the code is completed and so are usually written to critique the product and go directly to the regression suite.

* The middle tier in the pyramid should contain the bulk of automated tests. These tests execute fast, helps developers build the right thing because they are more like acceptance tests. These tests generally have the biggest ROI.

* These middle tier tests are usually functional tests and should be implemented in framework built in the same language as that of the project


That's it folks. More notes to come here soon.
