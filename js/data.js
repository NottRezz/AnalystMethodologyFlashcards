const CARDS = [
    {
        "category": "ITIL 4",
        "difficulty": "Foundation",
        "keywords": [
            "itil",
            "service management",
            "value"
        ],
        "q": "What is ITIL 4?",
        "a": "ITIL 4 is a best-practice framework for managing IT services and delivering value to users and the business.",
        "why": "Use this when they ask whether ITIL is a tool, coding framework, or methodology."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Foundation",
        "keywords": [
            "goal",
            "value",
            "business"
        ],
        "q": "What is the main goal of ITIL 4?",
        "a": "To help IT services stay reliable, efficient, useful, and aligned with business needs.",
        "why": "This answer is broad and safe for interviews."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Foundation",
        "keywords": [
            "incident",
            "outage",
            "restore"
        ],
        "q": "What is an incident in ITIL?",
        "a": "An incident is an unplanned interruption or reduction in service quality that needs to be resolved quickly.",
        "why": "Examples include outages, failed logins, broken access, or service degradation."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Practical",
        "keywords": [
            "incident management",
            "restore",
            "support"
        ],
        "q": "What is incident management focused on?",
        "a": "Restoring normal service as quickly as possible while minimizing impact to users.",
        "why": "Do not overcomplicate it. Incident management is about fast restoration."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Practical",
        "keywords": [
            "problem management",
            "root cause",
            "recurring"
        ],
        "q": "What is problem management?",
        "a": "Problem management focuses on identifying and resolving root causes so the same incidents do not keep happening.",
        "why": "Incident = immediate interruption. Problem = underlying cause."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Practical",
        "keywords": [
            "change enablement",
            "risk",
            "approval"
        ],
        "q": "What is change enablement in ITIL 4?",
        "a": "Change enablement makes sure system changes are assessed, approved, scheduled, and implemented in a controlled way.",
        "why": "This connects directly to change management."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Practical",
        "keywords": [
            "service desk",
            "support",
            "contact"
        ],
        "q": "What is the service desk?",
        "a": "The service desk is the main point of contact between users and IT for incidents, service requests, and support.",
        "why": "Think of it as the front door of IT support."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Practical",
        "keywords": [
            "continual improvement",
            "improve",
            "process"
        ],
        "q": "What is continual improvement?",
        "a": "Continual improvement means always looking for ways to improve services, processes, tools, and outcomes over time.",
        "why": "This is not just pushing updates. It is improving the overall service."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Interview",
        "keywords": [
            "service value system",
            "svs",
            "value"
        ],
        "q": "What is the ITIL Service Value System?",
        "a": "The Service Value System explains how all parts of an organization work together to turn demand and opportunity into value.",
        "why": "You probably do not need to list every component unless asked."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Interview",
        "keywords": [
            "service value chain",
            "plan",
            "deliver"
        ],
        "q": "What are the Service Value Chain activities?",
        "a": "Plan, Improve, Engage, Design and Transition, Obtain/Build, and Deliver and Support.",
        "why": "A simple memory phrase: plan it, build it, deliver it, improve it."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Interview",
        "keywords": [
            "four dimensions",
            "people",
            "technology"
        ],
        "q": "What are the four dimensions of ITIL 4?",
        "a": "Organizations and people, information and technology, partners and suppliers, and value streams and processes.",
        "why": "This shows ITIL looks at more than just tools."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Interview",
        "keywords": [
            "guiding principles",
            "value",
            "simple"
        ],
        "q": "Name a few ITIL 4 guiding principles.",
        "a": "Focus on value, start where you are, collaborate and promote visibility, keep it simple and practical, and improve continuously.",
        "why": "You only need two or three in most interviews."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Scenario",
        "keywords": [
            "outage",
            "incident",
            "problem"
        ],
        "q": "A system goes down. How would ITIL guide the response?",
        "a": "Log the incident, prioritize it based on impact, restore service quickly, communicate updates, then investigate root cause and improve the process afterward.",
        "why": "This combines incident management, problem management, and continual improvement."
    },
    {
        "category": "ITIL 4",
        "difficulty": "Scenario",
        "keywords": [
            "service request",
            "incident"
        ],
        "q": "What is the difference between an incident and a service request?",
        "a": "An incident is something broken or degraded. A service request is a normal user request, like access, information, or a standard setup.",
        "why": "This is a common support/process distinction."
    },
    {
        "category": "Agile",
        "difficulty": "Foundation",
        "keywords": [
            "agile",
            "iterative",
            "feedback"
        ],
        "q": "What is Agile?",
        "a": "Agile is an iterative approach to building software through small increments, frequent feedback, and the ability to adapt to change.",
        "why": "Keep Agile as a mindset, not a specific meeting schedule."
    },
    {
        "category": "Agile",
        "difficulty": "Foundation",
        "keywords": [
            "benefit",
            "feedback",
            "adapt"
        ],
        "q": "What is a key benefit of Agile?",
        "a": "Agile allows teams to get feedback early and adjust before too much time is spent in the wrong direction.",
        "why": "Great answer for why companies use it."
    },
    {
        "category": "Agile",
        "difficulty": "Foundation",
        "keywords": [
            "waterfall",
            "agile",
            "difference"
        ],
        "q": "How is Agile different from Waterfall?",
        "a": "Waterfall is more linear and planned upfront, while Agile works in smaller cycles and adapts as feedback comes in.",
        "why": "Do not trash Waterfall. Explain when each can work."
    },
    {
        "category": "Agile",
        "difficulty": "Practical",
        "keywords": [
            "iteration",
            "increment",
            "small steps"
        ],
        "q": "What does iterative development mean?",
        "a": "It means building and improving the system through repeated cycles instead of trying to complete everything in one big release.",
        "why": "Your wording about small steps is strong."
    },
    {
        "category": "Agile",
        "difficulty": "Practical",
        "keywords": [
            "backlog",
            "priorities"
        ],
        "q": "What is a backlog?",
        "a": "A backlog is a prioritized list of work items, such as features, bugs, improvements, and tasks.",
        "why": "In Scrum, the Product Owner usually manages the product backlog."
    },
    {
        "category": "Agile",
        "difficulty": "Practical",
        "keywords": [
            "user story",
            "requirements"
        ],
        "q": "What is a user story?",
        "a": "A user story describes a requirement from the user's perspective, often written as: As a user, I want X so that Y.",
        "why": "This keeps requirements tied to user value."
    },
    {
        "category": "Agile",
        "difficulty": "Practical",
        "keywords": [
            "acceptance criteria",
            "done"
        ],
        "q": "What are acceptance criteria?",
        "a": "Acceptance criteria are the conditions that must be met for a user story or task to be accepted as complete.",
        "why": "They prevent vague definitions of done."
    },
    {
        "category": "Agile",
        "difficulty": "Interview",
        "keywords": [
            "agile manifesto",
            "values"
        ],
        "q": "What does Agile prioritize?",
        "a": "Working software, collaboration, responding to change, and people-focused communication over heavy rigid process.",
        "why": "This paraphrases the Agile Manifesto without sounding robotic."
    },
    {
        "category": "Agile",
        "difficulty": "Interview",
        "keywords": [
            "definition of done",
            "quality"
        ],
        "q": "What is Definition of Done?",
        "a": "Definition of Done is a shared checklist that confirms work is complete, such as coded, tested, reviewed, documented, and accepted.",
        "why": "This shows quality discipline."
    },
    {
        "category": "Agile",
        "difficulty": "Interview",
        "keywords": [
            "velocity",
            "metrics"
        ],
        "q": "What is velocity in Agile?",
        "a": "Velocity is a measure of how much work a team typically completes in a sprint, often used for forecasting.",
        "why": "Do not frame it as an individual performance metric."
    },
    {
        "category": "Agile",
        "difficulty": "Interview",
        "keywords": [
            "burndown",
            "chart"
        ],
        "q": "What is a burndown chart?",
        "a": "A burndown chart shows how much work remains over time during a sprint or project.",
        "why": "It helps teams see whether they are on track."
    },
    {
        "category": "Agile",
        "difficulty": "Scenario",
        "keywords": [
            "changing requirements",
            "feedback"
        ],
        "q": "What would you do if requirements changed halfway through a project?",
        "a": "Clarify the change, assess impact, update priorities with stakeholders, and adjust the backlog or sprint plan depending on urgency.",
        "why": "This shows flexibility without being chaotic."
    },
    {
        "category": "Agile",
        "difficulty": "Scenario",
        "keywords": [
            "scope creep",
            "requirements"
        ],
        "q": "How would you handle scope creep?",
        "a": "Document the new request, assess impact on timeline and priorities, and have the Product Owner or stakeholders decide where it fits.",
        "why": "Do not just say yes to everything."
    },
    {
        "category": "Scrum",
        "difficulty": "Foundation",
        "keywords": [
            "scrum",
            "agile framework"
        ],
        "q": "What is Scrum?",
        "a": "Scrum is a framework for applying Agile using defined roles, events, artifacts, and short work cycles called sprints.",
        "why": "Agile is the mindset. Scrum is a structured way to apply it."
    },
    {
        "category": "Scrum",
        "difficulty": "Foundation",
        "keywords": [
            "sprint",
            "cycle"
        ],
        "q": "What is a sprint?",
        "a": "A sprint is a short, fixed development cycle, usually one to four weeks, where the team works toward a sprint goal.",
        "why": "Mention time-boxed if you remember it."
    },
    {
        "category": "Scrum",
        "difficulty": "Foundation",
        "keywords": [
            "scrum master",
            "blockers"
        ],
        "q": "What does a Scrum Master do?",
        "a": "The Scrum Master helps the team follow Scrum, removes blockers, and keeps the process running smoothly.",
        "why": "They are a facilitator, not just a manager."
    },
    {
        "category": "Scrum",
        "difficulty": "Foundation",
        "keywords": [
            "product owner",
            "priority"
        ],
        "q": "What does a Product Owner do?",
        "a": "The Product Owner manages priorities, owns the product backlog, and represents business or user needs.",
        "why": "They decide what is most valuable to build next."
    },
    {
        "category": "Scrum",
        "difficulty": "Foundation",
        "keywords": [
            "development team",
            "developers"
        ],
        "q": "What does the development team do in Scrum?",
        "a": "The development team does the work required to deliver the sprint goal and product increment.",
        "why": "They are responsible for building, testing, and delivering the work."
    },
    {
        "category": "Scrum",
        "difficulty": "Practical",
        "keywords": [
            "daily standup",
            "blockers"
        ],
        "q": "What is the purpose of a daily standup?",
        "a": "A short daily meeting to discuss progress, next steps, and blockers.",
        "why": "Keep it focused. It is not supposed to be a long status meeting."
    },
    {
        "category": "Scrum",
        "difficulty": "Practical",
        "keywords": [
            "sprint planning",
            "goal"
        ],
        "q": "What happens in sprint planning?",
        "a": "The team decides what work to take into the sprint and how they will approach it.",
        "why": "Sprint planning creates alignment before the sprint starts."
    },
    {
        "category": "Scrum",
        "difficulty": "Practical",
        "keywords": [
            "sprint review",
            "product"
        ],
        "q": "What is a sprint review?",
        "a": "A sprint review is where the team reviews what was built, gets feedback, and discusses product next steps.",
        "why": "Product-focused."
    },
    {
        "category": "Scrum",
        "difficulty": "Practical",
        "keywords": [
            "retrospective",
            "team"
        ],
        "q": "What is a retrospective?",
        "a": "A retrospective is where the team reflects on how they worked and identifies improvements for the next sprint.",
        "why": "Team/process-focused."
    },
    {
        "category": "Scrum",
        "difficulty": "Interview",
        "keywords": [
            "review vs retro",
            "difference"
        ],
        "q": "What is the difference between a sprint review and a retrospective?",
        "a": "A sprint review focuses on the product and what was built. A retrospective focuses on the team\u2019s process and how to improve.",
        "why": "This one is worth memorizing clearly."
    },
    {
        "category": "Scrum",
        "difficulty": "Interview",
        "keywords": [
            "increment",
            "deliverable"
        ],
        "q": "What is a product increment?",
        "a": "A product increment is the usable work completed during a sprint that adds to the product.",
        "why": "In simple terms: the working result of the sprint."
    },
    {
        "category": "Scrum",
        "difficulty": "Interview",
        "keywords": [
            "scrum artifacts",
            "backlog"
        ],
        "q": "What are the main Scrum artifacts?",
        "a": "Product Backlog, Sprint Backlog, and Increment.",
        "why": "This is a classic Scrum basics question."
    },
    {
        "category": "Scrum",
        "difficulty": "Scenario",
        "keywords": [
            "blocker",
            "scrum master"
        ],
        "q": "If a developer is blocked, what should happen in Scrum?",
        "a": "The blocker should be raised quickly, often in the daily standup, and the Scrum Master or team should help remove it.",
        "why": "This shows communication and process awareness."
    },
    {
        "category": "Scrum",
        "difficulty": "Scenario",
        "keywords": [
            "unfinished work",
            "sprint"
        ],
        "q": "What happens if work is not finished by the end of a sprint?",
        "a": "The team reviews why it was not completed, carries it forward or reprioritizes it, and uses the retrospective to improve planning.",
        "why": "Do not pretend every sprint is perfect."
    },
    {
        "category": "Change Management",
        "difficulty": "Foundation",
        "keywords": [
            "change management",
            "risk"
        ],
        "q": "What is change management?",
        "a": "Change management is a structured way to plan, approve, deploy, and review changes while reducing risk.",
        "why": "This is one of your core interview topics."
    },
    {
        "category": "Change Management",
        "difficulty": "Foundation",
        "keywords": [
            "importance",
            "risk",
            "outage"
        ],
        "q": "Why is change management important?",
        "a": "It helps prevent uncontrolled changes from causing outages, errors, confusion, or business disruption.",
        "why": "Main idea: safe change."
    },
    {
        "category": "Change Management",
        "difficulty": "Foundation",
        "keywords": [
            "standard change",
            "routine"
        ],
        "q": "What is a standard change?",
        "a": "A standard change is low-risk, repeatable, and usually pre-approved because the process is already known.",
        "why": "Example: routine maintenance with documented steps."
    },
    {
        "category": "Change Management",
        "difficulty": "Foundation",
        "keywords": [
            "normal change",
            "approval"
        ],
        "q": "What is a normal change?",
        "a": "A normal change requires review and approval before being implemented.",
        "why": "This is the typical controlled change."
    },
    {
        "category": "Change Management",
        "difficulty": "Foundation",
        "keywords": [
            "emergency change",
            "urgent"
        ],
        "q": "What is an emergency change?",
        "a": "An emergency change is an urgent change needed to fix a critical issue or outage quickly.",
        "why": "It should still be reviewed and documented afterward."
    },
    {
        "category": "Change Management",
        "difficulty": "Practical",
        "keywords": [
            "rollback",
            "deployment"
        ],
        "q": "What is a rollback plan?",
        "a": "A rollback plan explains how to return to the previous stable state if a change fails.",
        "why": "This is a strong best-practice answer."
    },
    {
        "category": "Change Management",
        "difficulty": "Practical",
        "keywords": [
            "impact assessment",
            "risk"
        ],
        "q": "What is a change impact assessment?",
        "a": "It identifies who and what will be affected by a change, including users, systems, risk, timing, and dependencies.",
        "why": "Shows you think beyond code."
    },
    {
        "category": "Change Management",
        "difficulty": "Practical",
        "keywords": [
            "cab",
            "approval"
        ],
        "q": "What is a Change Advisory Board, or CAB?",
        "a": "A CAB is a group that reviews significant changes and advises on risk, priority, approval, and scheduling.",
        "why": "Not every small change needs a CAB."
    },
    {
        "category": "Change Management",
        "difficulty": "Interview",
        "keywords": [
            "deployment safe",
            "staging"
        ],
        "q": "How would you safely deploy a change?",
        "a": "Test it in staging, review risk, get approval if needed, deploy during a safe window, monitor after release, and have a rollback plan.",
        "why": "This answer covers a lot of bases."
    },
    {
        "category": "Change Management",
        "difficulty": "Interview",
        "keywords": [
            "communication",
            "stakeholders"
        ],
        "q": "Why is communication important during change?",
        "a": "People need to know what is changing, why it matters, when it is happening, and how it may affect them.",
        "why": "Poor communication makes even good changes feel messy."
    },
    {
        "category": "Change Management",
        "difficulty": "Interview",
        "keywords": [
            "adkar",
            "organizational change"
        ],
        "q": "What is ADKAR?",
        "a": "ADKAR is a change model: Awareness, Desire, Knowledge, Ability, and Reinforcement.",
        "why": "Good to know if they ask organizational change questions."
    },
    {
        "category": "Change Management",
        "difficulty": "Interview",
        "keywords": [
            "kotter",
            "8 step"
        ],
        "q": "What is Kotter's 8-step model?",
        "a": "Kotter's model is a structured approach for leading organizational change, from creating urgency to reinforcing the change.",
        "why": "You probably only need the purpose, not every step."
    },
    {
        "category": "Change Management",
        "difficulty": "Scenario",
        "keywords": [
            "failed deployment",
            "rollback"
        ],
        "q": "A deployment breaks production. What do you do?",
        "a": "Communicate the issue, assess impact, roll back if needed, restore service, document what happened, and perform a post-implementation review.",
        "why": "Restore first, then investigate."
    },
    {
        "category": "Change Management",
        "difficulty": "Scenario",
        "keywords": [
            "resistance",
            "users"
        ],
        "q": "Users are resisting a new system. How would you approach it?",
        "a": "Listen to concerns, explain the reason for the change, provide training, involve key users, and communicate benefits clearly.",
        "why": "This is about people, not just technology."
    },
    {
        "category": "System Analysis",
        "difficulty": "Foundation",
        "keywords": [
            "system analyst",
            "bridge"
        ],
        "q": "What does a System Analyst do?",
        "a": "A System Analyst studies business needs, gathers requirements, analyzes processes, and helps translate those needs into technical solutions.",
        "why": "Best short version: bridge between business and technology."
    },
    {
        "category": "System Analysis",
        "difficulty": "Foundation",
        "keywords": [
            "stakeholder",
            "users"
        ],
        "q": "What is a stakeholder?",
        "a": "A stakeholder is anyone affected by or involved in a system, project, decision, or change.",
        "why": "Examples: users, managers, developers, support, customers."
    },
    {
        "category": "System Analysis",
        "difficulty": "Foundation",
        "keywords": [
            "functional requirement"
        ],
        "q": "What is a functional requirement?",
        "a": "A functional requirement describes what the system must do.",
        "why": "Example: users must be able to reset their password."
    },
    {
        "category": "System Analysis",
        "difficulty": "Foundation",
        "keywords": [
            "nonfunctional requirement",
            "performance"
        ],
        "q": "What is a non-functional requirement?",
        "a": "A non-functional requirement describes how the system should perform or behave.",
        "why": "Examples: speed, security, reliability, usability."
    },
    {
        "category": "System Analysis",
        "difficulty": "Practical",
        "keywords": [
            "process mapping",
            "workflow"
        ],
        "q": "What is process mapping?",
        "a": "Process mapping visually shows how a workflow currently works or how it should work in the future.",
        "why": "Useful for finding gaps, delays, and improvement areas."
    },
    {
        "category": "System Analysis",
        "difficulty": "Practical",
        "keywords": [
            "as-is to-be"
        ],
        "q": "What is the difference between as-is and to-be processes?",
        "a": "As-is describes the current process. To-be describes the improved future process.",
        "why": "Classic system analysis language."
    },
    {
        "category": "System Analysis",
        "difficulty": "Practical",
        "keywords": [
            "requirements gathering",
            "interviews"
        ],
        "q": "What are common requirements gathering techniques?",
        "a": "Interviews, workshops, observation, surveys, document review, process mapping, and stakeholder meetings.",
        "why": "Say two or three if asked."
    },
    {
        "category": "System Analysis",
        "difficulty": "Interview",
        "keywords": [
            "unclear requirements",
            "clarify"
        ],
        "q": "How would you handle unclear requirements?",
        "a": "Ask clarifying questions, confirm assumptions, involve stakeholders, document decisions, and validate the requirement before development.",
        "why": "Shows you will not blindly build the wrong thing."
    },
    {
        "category": "System Analysis",
        "difficulty": "Interview",
        "keywords": [
            "documentation",
            "alignment"
        ],
        "q": "Why is documentation important for a System Analyst?",
        "a": "Documentation keeps requirements, decisions, workflows, and expectations clear so teams stay aligned.",
        "why": "Good documentation reduces confusion later."
    },
    {
        "category": "System Analysis",
        "difficulty": "Scenario",
        "keywords": [
            "conflicting stakeholders"
        ],
        "q": "Two stakeholders disagree on a requirement. What do you do?",
        "a": "Clarify each need, identify the business priority, document trade-offs, and help the decision-maker choose the best path.",
        "why": "Do not pick sides randomly. Facilitate the decision."
    },
    {
        "category": "Best Practices",
        "difficulty": "Foundation",
        "keywords": [
            "version control",
            "git"
        ],
        "q": "Why use version control?",
        "a": "Version control tracks code changes, supports collaboration, and allows teams to revert when needed.",
        "why": "Example: Git."
    },
    {
        "category": "Best Practices",
        "difficulty": "Foundation",
        "keywords": [
            "staging",
            "test"
        ],
        "q": "Why use a staging environment?",
        "a": "A staging environment lets teams test changes before they affect live users.",
        "why": "Great answer for deployment safety."
    },
    {
        "category": "Best Practices",
        "difficulty": "Foundation",
        "keywords": [
            "code review",
            "quality"
        ],
        "q": "Why are code reviews useful?",
        "a": "Code reviews provide a second set of eyes to catch issues, improve quality, and share knowledge.",
        "why": "This is exactly how you have been answering it."
    },
    {
        "category": "Best Practices",
        "difficulty": "Foundation",
        "keywords": [
            "monitoring",
            "alerts"
        ],
        "q": "Why is monitoring important?",
        "a": "Monitoring helps detect issues quickly so teams can respond before impact grows.",
        "why": "You cannot fix what you cannot see."
    },
    {
        "category": "Best Practices",
        "difficulty": "Practical",
        "keywords": [
            "logging",
            "troubleshooting"
        ],
        "q": "What is logging?",
        "a": "Logging records system events, errors, and activity so issues can be investigated later.",
        "why": "Logs explain what happened and when."
    },
    {
        "category": "Best Practices",
        "difficulty": "Practical",
        "keywords": [
            "ci/cd",
            "automation"
        ],
        "q": "What is CI/CD?",
        "a": "CI/CD automates building, testing, and deploying software so releases are more consistent and reliable.",
        "why": "Continuous Integration and Continuous Delivery/Deployment."
    },
    {
        "category": "Best Practices",
        "difficulty": "Practical",
        "keywords": [
            "backup",
            "recovery"
        ],
        "q": "Why are backups important?",
        "a": "Backups help restore data or systems after failure, corruption, or accidental deletion.",
        "why": "Tie this to business continuity."
    },
    {
        "category": "Best Practices",
        "difficulty": "Practical",
        "keywords": [
            "least privilege",
            "security"
        ],
        "q": "What is least privilege?",
        "a": "Least privilege means users and systems only get the access they need to do their job.",
        "why": "Basic but important security best practice."
    },
    {
        "category": "Best Practices",
        "difficulty": "Interview",
        "keywords": [
            "small releases",
            "risk"
        ],
        "q": "Why are small releases usually safer?",
        "a": "Small releases are easier to review, test, deploy, monitor, and roll back if something goes wrong.",
        "why": "This connects well to Agile and change management."
    },
    {
        "category": "Best Practices",
        "difficulty": "Interview",
        "keywords": [
            "post implementation review",
            "pir"
        ],
        "q": "What is a post-implementation review?",
        "a": "A review after a change or deployment to check what went well, what failed, and what should improve next time.",
        "why": "This overlaps with continual improvement."
    },
    {
        "category": "Best Practices",
        "difficulty": "Interview",
        "keywords": [
            "best practices list"
        ],
        "q": "What best practices would you mention in an interview?",
        "a": "Version control, staging, testing, code reviews, monitoring, logging, documentation, backups, least privilege, and rollback plans.",
        "why": "Broad answer that covers a lot of ground."
    },
    {
        "category": "Best Practices",
        "difficulty": "Scenario",
        "keywords": [
            "production issue",
            "monitoring"
        ],
        "q": "How would you respond to a production issue?",
        "a": "Confirm the issue, assess impact, communicate clearly, restore service, check logs/monitoring, document the fix, and review root cause afterward.",
        "why": "Calm, structured, and realistic."
    },
    {
        "category": "Tie It Together",
        "difficulty": "Interview",
        "keywords": [
            "agile itil change management"
        ],
        "q": "How do Agile, Scrum, ITIL, and change management connect?",
        "a": "Agile and Scrum help teams build iteratively. ITIL helps manage and support services. Change management makes sure updates are introduced safely.",
        "why": "This is the big-picture answer."
    },
    {
        "category": "Tie It Together",
        "difficulty": "Interview",
        "keywords": [
            "build run deploy"
        ],
        "q": "Give a simple mental model for these topics.",
        "a": "Agile/Scrum is how teams build, ITIL is how teams run services, change management is how teams deploy safely, and best practices keep everything reliable.",
        "why": "This is the line to remember if you blank."
    },
    {
        "category": "Tie It Together",
        "difficulty": "Scenario",
        "keywords": [
            "interview answer"
        ],
        "q": "What should your answers generally show in the interview?",
        "a": "That you think about users, risk, communication, documentation, testing, service reliability, and continuous improvement.",
        "why": "This is what they are really testing."
    }
];

const RAW_QUESTIONS = "[ITIL 4 | Foundation] What is ITIL 4?  #itil #service management #value\n[ITIL 4 | Foundation] What is the main goal of ITIL 4?  #goal #value #business\n[ITIL 4 | Foundation] What is an incident in ITIL?  #incident #outage #restore\n[ITIL 4 | Practical] What is incident management focused on?  #incident management #restore #support\n[ITIL 4 | Practical] What is problem management?  #problem management #root cause #recurring\n[ITIL 4 | Practical] What is change enablement in ITIL 4?  #change enablement #risk #approval\n[ITIL 4 | Practical] What is the service desk?  #service desk #support #contact\n[ITIL 4 | Practical] What is continual improvement?  #continual improvement #improve #process\n[ITIL 4 | Interview] What is the ITIL Service Value System?  #service value system #svs #value\n[ITIL 4 | Interview] What are the Service Value Chain activities?  #service value chain #plan #deliver\n[ITIL 4 | Interview] What are the four dimensions of ITIL 4?  #four dimensions #people #technology\n[ITIL 4 | Interview] Name a few ITIL 4 guiding principles.  #guiding principles #value #simple\n[ITIL 4 | Scenario] A system goes down. How would ITIL guide the response?  #outage #incident #problem\n[ITIL 4 | Scenario] What is the difference between an incident and a service request?  #service request #incident\n[Agile | Foundation] What is Agile?  #agile #iterative #feedback\n[Agile | Foundation] What is a key benefit of Agile?  #benefit #feedback #adapt\n[Agile | Foundation] How is Agile different from Waterfall?  #waterfall #agile #difference\n[Agile | Practical] What does iterative development mean?  #iteration #increment #small steps\n[Agile | Practical] What is a backlog?  #backlog #priorities\n[Agile | Practical] What is a user story?  #user story #requirements\n[Agile | Practical] What are acceptance criteria?  #acceptance criteria #done\n[Agile | Interview] What does Agile prioritize?  #agile manifesto #values\n[Agile | Interview] What is Definition of Done?  #definition of done #quality\n[Agile | Interview] What is velocity in Agile?  #velocity #metrics\n[Agile | Interview] What is a burndown chart?  #burndown #chart\n[Agile | Scenario] What would you do if requirements changed halfway through a project?  #changing requirements #feedback\n[Agile | Scenario] How would you handle scope creep?  #scope creep #requirements\n[Scrum | Foundation] What is Scrum?  #scrum #agile framework\n[Scrum | Foundation] What is a sprint?  #sprint #cycle\n[Scrum | Foundation] What does a Scrum Master do?  #scrum master #blockers\n[Scrum | Foundation] What does a Product Owner do?  #product owner #priority\n[Scrum | Foundation] What does the development team do in Scrum?  #development team #developers\n[Scrum | Practical] What is the purpose of a daily standup?  #daily standup #blockers\n[Scrum | Practical] What happens in sprint planning?  #sprint planning #goal\n[Scrum | Practical] What is a sprint review?  #sprint review #product\n[Scrum | Practical] What is a retrospective?  #retrospective #team\n[Scrum | Interview] What is the difference between a sprint review and a retrospective?  #review vs retro #difference\n[Scrum | Interview] What is a product increment?  #increment #deliverable\n[Scrum | Interview] What are the main Scrum artifacts?  #scrum artifacts #backlog\n[Scrum | Scenario] If a developer is blocked, what should happen in Scrum?  #blocker #scrum master\n[Scrum | Scenario] What happens if work is not finished by the end of a sprint?  #unfinished work #sprint\n[Change Management | Foundation] What is change management?  #change management #risk\n[Change Management | Foundation] Why is change management important?  #importance #risk #outage\n[Change Management | Foundation] What is a standard change?  #standard change #routine\n[Change Management | Foundation] What is a normal change?  #normal change #approval\n[Change Management | Foundation] What is an emergency change?  #emergency change #urgent\n[Change Management | Practical] What is a rollback plan?  #rollback #deployment\n[Change Management | Practical] What is a change impact assessment?  #impact assessment #risk\n[Change Management | Practical] What is a Change Advisory Board, or CAB?  #cab #approval\n[Change Management | Interview] How would you safely deploy a change?  #deployment safe #staging\n[Change Management | Interview] Why is communication important during change?  #communication #stakeholders\n[Change Management | Interview] What is ADKAR?  #adkar #organizational change\n[Change Management | Interview] What is Kotter's 8-step model?  #kotter #8 step\n[Change Management | Scenario] A deployment breaks production. What do you do?  #failed deployment #rollback\n[Change Management | Scenario] Users are resisting a new system. How would you approach it?  #resistance #users\n[System Analysis | Foundation] What does a System Analyst do?  #system analyst #bridge\n[System Analysis | Foundation] What is a stakeholder?  #stakeholder #users\n[System Analysis | Foundation] What is a functional requirement?  #functional requirement\n[System Analysis | Foundation] What is a non-functional requirement?  #nonfunctional requirement #performance\n[System Analysis | Practical] What is process mapping?  #process mapping #workflow\n[System Analysis | Practical] What is the difference between as-is and to-be processes?  #as-is to-be\n[System Analysis | Practical] What are common requirements gathering techniques?  #requirements gathering #interviews\n[System Analysis | Interview] How would you handle unclear requirements?  #unclear requirements #clarify\n[System Analysis | Interview] Why is documentation important for a System Analyst?  #documentation #alignment\n[System Analysis | Scenario] Two stakeholders disagree on a requirement. What do you do?  #conflicting stakeholders\n[Best Practices | Foundation] Why use version control?  #version control #git\n[Best Practices | Foundation] Why use a staging environment?  #staging #test\n[Best Practices | Foundation] Why are code reviews useful?  #code review #quality\n[Best Practices | Foundation] Why is monitoring important?  #monitoring #alerts\n[Best Practices | Practical] What is logging?  #logging #troubleshooting\n[Best Practices | Practical] What is CI/CD?  #ci/cd #automation\n[Best Practices | Practical] Why are backups important?  #backup #recovery\n[Best Practices | Practical] What is least privilege?  #least privilege #security\n[Best Practices | Interview] Why are small releases usually safer?  #small releases #risk\n[Best Practices | Interview] What is a post-implementation review?  #post implementation review #pir\n[Best Practices | Interview] What best practices would you mention in an interview?  #best practices list\n[Best Practices | Scenario] How would you respond to a production issue?  #production issue #monitoring\n[Tie It Together | Interview] How do Agile, Scrum, ITIL, and change management connect?  #agile itil change management\n[Tie It Together | Interview] Give a simple mental model for these topics.  #build run deploy\n[Tie It Together | Scenario] What should your answers generally show in the interview?  #interview answer";
