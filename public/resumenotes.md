Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
1 of 67
resume notes
Inbox

Renn <renn.co@gmail.com>
6:46 PM (1 minute ago)
to me


RENN VALO
System Engineer IV
Software Engineering Computer Science, Temple University 1990-1993
System Engineer IV
NOAA Systems Engineer June 2024 – Current
• Managing GSL’s Github accounts
• Monitoring all public facing websites for NOAA compliance



System Administrator III - HPC Support
NOAA Systems Administrator – HPC | 2022 – June 2024
• Managed HPC project allocations (CPU and Disk) for all of NOAA HPC systems and NOAA portfolios.
• Discussed project resource allocations with stakeholders, collected feedback on different stages and directly addressed concerns with management and team.
• Implemented allocation resource changes for all portfolios and projects across NOAA HPC.
• Supported users and project team members across multiple operating systems and software environments, and infrastructure (Windows, Linux Server, and Mac OS) as it related to their HPC Access at NOAA
• Managed all user support with the team across all labs at NOAA HPC

Senior Information Technology Consultant
Boulder Area Realtors Association | 2015 – 01/15/22
• Build and service entire network and cloud services for Boulder Area Realtors
• Discussed project progress with stakeholders, collected feedback on different stages and directly addressed concerns.
• Recommended and installed upgrades and helped businesses to plan for technology to match growth and reduce costs by more than 50%
• Made recommendations and performed upgrades, assisting businesses in technology planning aligned with growth projections.
• Implemented and managed operating systems and software, security systems and intrusion detection systems (Windows, Linux Server, and Mac OS).
• Conducted research on network products, services, protocols and standards for network procurement, hardware, and development efforts.

Lead Engineer & Operating Officer
DBI Studios (Dboorse Interactive) | 2021 - 2022
• Lead product development, design architect, project management, and support.
• Successfully published mobile applications across iOS Apple, Android, Mac, and PC leading a small team of developers.
• Maintained control and quality of intellectual property across platforms
• Identified issues with production, workforce and material sourcing and implemented successful solutions.



Software Engineer Consultant
Centennial Software Solutions, Boulder, CO | 2019 – Oct 2022
• Investigated new and emerging software applications to select and implement administrative information systems.
• Worked with Blue Origin on their health monitoring system New Glenn flight computer project.
• Validated implementation methods for imbedded systems.
• Implemented telemetry interface software with AWS and custom hardware for client.
• Conducted modeling, performance and integration testing.
• Strengthened developmental methodologies by implementing quality control processes.

Lead Interface Programmer & Technology Officer
Tradinformed, London, UK | 2019 – 2022
• Designed, planned and implemented new systems and enhancements improve productivity using Python to automate getting financial data streaming into Excel
• Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements on time for current subscribers.
• Troubleshot all network and software issues to achieve architecture compatibility. Across all platforms supported.

Lead Mobile Application Developer
FutureEV, Denver, CO 2016-2018
• Designed, Developed, and oversaw programmers to create mobile applications similar to Uber for electric transportation.
• Managed company-level architecture, platform and data configuration processes and implementation protocols.
• Demonstrated mobile application feasibility on iOS, Android, and PC for Google
• Improved mobile application delivery performance and reliability.
• Maintained high-level knowledge of current and emerging technology development and applications.
• Briefed executives on technology risks and suggested ways to alleviate concerns
 
Senior Consultant
Siemens Health Services, Malvern PA | 1998-2015

• Lead architect for Siemens Encoder Interface for all ICD10 medical data to third party vendors like 3M and Quadramed.
• Lead architect for Siemens Ansos nurse staff acuity system.
• Assistant architect in PA INVISION extracts that converts mainframe files to SQL Server database.


SKILLS


• Information gathering and analysis
• IT service management

• Good Verbal and written communication
• Python integration
• Unity Development Platform Experience
• Python integration to Excel and SQL
• Setting up in-house cloud computing
• Docker integration and usage
• Project management (Jira, etc.)
• Remote repository management
• Working with off shore programmers
• Protecting intellectual property rights, WTO
• Visual Studio
• XCode, IOS, Android, Mac, and Windows coding experience
• Customer facing consulting
RESPONSIBLITIES
Renn Valo Tasking
Project List Status/Priority
1. GSL Web Support
 In Progress/As Needed
2. VM Migration to Cloud
 In Progress/As Needed
3. GSL SSOP Portal
 In Progress/As Needed
4. AI System and Project Support
 In Progress/As Needed
5. GitHub
 In Progress/As Needed
6. Employee On/Off-Boarding
 In Progress/High Priority
7. AWS/Cloud Providers Costing Dashboard
 In Progress/Blocked
8. MFA Solutions for SSH Access
 In Progress/As Needed
GSL Web Support
This effort is focused on understanding and advancing GSL’s web capabilities. GSL’s web pages need to be housed in a common infrastructure that is easily maintained, highly reliable, and can be easily ported to new and emerging technologies. The infrastructure should handle the requirement for non-web developers to be able to add and maintain content without having to understand the underlying infrastructure and complicated upgrade processes. Phase one was focused on understanding and maintaining the current infrastructure so that the system could be patched and was more reliable. An ongoing effort of phase one and new web page efforts is the ability to identify and decommission non-supported projects. Phase two is to stand up a new infrastructure that supports the goals of this project:


• Easily maintained.
• Highly reliable.
• Portable to new and emerging technologies.
• Ability for non-developers to add and maintain content.The focus of the first phase is to understand current

An ongoing effort for ITS is to modernise our web presence look and feel.
 
Action Items:
Phase One
•
Understanding and supporting current infrastructure.
o
In Progress Blocked--- Can’t upgrade the RH7 systems being used by publications. Publications VMs turned off until WordPress on the new infrastructure is available.
•
Decommissioning non-supported web sites.
o
Completed - HRRR Smoke will be decommissioned on 12/8.
o
In Progress - Wave will be decommissioned on 1//23/26.
Phase Two
•
Working with Eric on WordPress.
o
In Progress
ITS Web Presence Modernization
•
AI component search engine
o
In Progress - Created vectorizing based vector stores for searching specific topics/GSL knowledge pools.
•
Modernized look and feel
o
In Progress Blocked - We have discussed as a team but lost a developer. The first version of the website will have a look and feel similar to the HPC websites Renn helped improve.

Notes:
VM Migration to the Cloud
This activity includes all application team efforts to help move GSL infrastructure and applications to the cloud. The application team will focus on helping to build and document templates and CI/CD processes for GSL containerization. On premises and in the cloud we plan to build containers using kubernetes and evaluate the utility of using rancher for the orchestration of our on premises kubernetes cluster. The application team will work with the ITS team and GSL researchers to help ensure the templates, processes, and documentation will help provide an efficient, well documented, easily adoptable path available to GSL users. The goal of this effort is to ensure that the templates and processes provided allow for GSL’s research to be easily accomplished in the Cloud, on premises, on HPC systems, and other platforms as the requirement arises.

Action Items:
•
Working on VAST NFS mount problems with kubernetes.
o
On Hold - Met with the VAST support  team and have isolated the problem to a permissions issue with Rancher. Currently waiting for the VAST support team to supply a date for the next meeting to resolve the issue. Gary was able to successfully mount a VAST NFS mount point from a container on the cluster as root.
•
Discuss keeping rancher with ITS and Miguel.
o
On Hold - Waiting to see the results of the permissions problem. Rancher is well supported and would be a good tool moving forward.
•
Rebuild the Kubernetes cluster.
o
On Hold - Waiting for the results from the above action items.
•
Provide a container for Jenn to spin up on Azure that uses Azure’s orchestrator.
o
On Hold - Have been waiting 1.5 months as Jenn works with the Azure support team. If this is the support we should expect from Azure do we really want to move in this direction?
•
Start developing a plan for templating containers with the application team.
o
Not Started - Will discuss at the next meeting.

Notes:
GSL’s SSOP portal MFA using Login.gov & AWS Appstream Applications
The applications team will take over the login.gov capability that Kirk Holub developed. GSL’s login.gov capability was put in place to help ensure GSL comply with MFA. The goal of this effort is to simplify, maintain, and enhance GSL’s login.gov capabilities as evolving requirements and technologies are added.

Action Items:
•
Completely refactored code to run in a container using Python’s FastAPI (Cloud Ready), work with outside collaborators, and work with new requirements from login.gov to support new authentication methods.
o
Completed -Development, testing, and roll out complete.
•
Update lambda functions that enable AWS Appstream applications to support AWS’ python version upgrade to 3.11
o
Completed - Development, testing, and roll out complete. The roll out included small feature enhancements to provide sponsor information. Milke Vrencur updated profiles that contained the sponsor information.
•
Determine if there are other features that Kirk developed in the login.gov application that should be employed in the new version.
o
Completed - After a completed review of Kirk’s Django application and its features the login.gov portal was rewritten in Python’s fastAPI.  Kirk’s old VM was decommissioned in June 2025 and the portal now runs on our internal Kubernetes cluster as a container.
•
On-Going support for the containerized version of the Login.gov portal
o
In Progress Continue to maintain the portal as Login.gov updates and maintain the code base for security updates.

Notes: All VM’s related to Kirk’s original portal to Login.gov have been decommissioned this year:  gsl-webssop, gsl-webstage8, and pub-webedit  

AI System and Project Support
Machine Learning and Artificial Intelligence ML/AI applications touch all aspects of our lives. GSL needs to be a leader at adapting ML/AI in everything we do to help accelerate and hopefully improve all aspects of our work. The goal of this project is to ensure the applications team helps evolve GSL’s use of ML/AI in support of GSL’s needs. GSL has purchased an ML/AI system that lives in-house called Jebbster.  The applications team will help ensure that Jebbster is configured and works properly, the team will help orchestrate ML/AI projects on Jebster, and monitor and resolve issues with Jebbster and the ML/AI project teams as they arise.
 
Action Items:
•
Create a portal to use ITS’ in-house AI solution and alternative to copilot on prem.
o
Completed
•
Support on/off-boarding of ML/AI projects.
•
In Progress- Current users-Renn, Marshal, and Ian. Need to reach out since the furlough to see if there are other projects that need access.
•
Support ML/AI project moves to HPC capable systems.
o
In Progress- Supporting ML/AI efforts as they arise.
o
In Progress - Containerizing all Ai projects so they can be ported to cloud providers and HPC Ursa using Singularity.
•
Maintain ML/AI project set up and usage documentation.
o
In Progress- Modifying as needed.
•
AI in-house Model Maintenance:
o
In Progress- Ensuring the ongoing functionality and stability of all in-house AI models operating on the primary AI server.  Ollama models
•
AI Server System OS Maintenance:
o
In Progress- We are taking over for Peter on these tasks wherever possible.
•
AI Server Security Update Maintenance:
o
In Progress- We are taking over for Peter on these tasks wherever possible.
•
Nimbus Maintenance:
o
 In Progress- Keeping the Nimbus system updated with the latest source code revisions and essential security patches.
•
Integration Maintenance:
o
 In Progress- Maintaining the functionality of the smart socket integration with Slack
o
API’s,  In Progress- Maintaining current python based fastAPI’s
o
 Not Started -future website integration.
•
Knowledge Base Management(Nimbus):
o
 In Progress- Updating Nimbus's knowledge base and developing automation scripts to streamline and simplify this task.

Notes:  There are a lot of Ai based tasks from maintaining the server,security updates, updating the source code, helping the scientists, on/Offboarding users, updating local models, maintaining integration with outside sources - Slack / website, etc.  I would like to offload the sys admin tasks to a sys admin at some point when we have the staff (security updates and OS updates). Meanwhile I will work with Yujun and get him up to speed on some of these tasks so he can help out.  Once he’s on the team, I will set up a call with the HPC support team to discuss how to maintain the OS and security updates.
GitHub
GitHub is a source code repository and application that helps facilitate code enhancements made by GSL developers and collaborators. GitHub allows for efficient sharing of code with the public and others. GitHub provides the hooks and utilities for code generation and verification using copilot and other ai-generative applications. GitHub provides for automated workflows for developing efficient, well tested, and orchestrated workflows in support of the CI/CD pipeline. The goal for the applications team on this project is to document and support GSL’s use of GitHub to ensure GSL is working efficiently and securely with our organization's instance of GitHub.

Action Items:
•
On/Off-board users to GitHub and approved applications.
o
In Progress- Adding/removing users as needed.
o
In Progress- Found that the default behavior of removing a user was changed with GitHub’s latest release. The new release allows continued access to GitHub by the user we were trying to remove as an unaffiliated user. Working with Tristen and GitHub enterprise administrators to re-establish the old behavior.
•
Add/Remove access to applications to meet GSL’s security requirements and policies.
o
In Progress Currently working with Tristen to schedule a meeting. We would like to be able to add to copilots AI capabilities from the organizational level instead of impacting the whole enterprise with these additions.
•
Ensure users of GitHub are notified when changes are made that require their approval, knowledge, or acceptance.
o
In Progress I would like to have the new applications developer working on this.
•
Help develop automated workflows for project teams as we move to on prem and cloud use of containers.
o
In Progress- Have been exploring possibilities and will be working with developers as the needed.
•
Maintain and update GitHub documentation.
o
In Progress - Updating as needed.

Notes:
Employee On/Off-Boarding
The goal of this project is to automate, track, and alert the on/off-boarding of GSL employees, student workers, guest scientists, and affiliates that have access to GSL GFE, systems, email, and other assets. Management would like the applications team to tie this to Missy Petty’s smartsheets so all actions start/tied and can be tracked from a centralized location.

Action Items:
•
Use information provided by SSG, ELT, and ITS management to develop automation
o
In Progress- Decision tree development. Have collected the material. The application team needs to meet to start this process. The outcome will be a decision tree, list of items that can be automated, and any manual or sticking points.
o
Not Started- After finalizing the tree review with ITS management.
o
Not Started- Design and start implementation
o
Not Started- Test results
o
Not Started- Have the ELT and ITS management test.
o
Not Started- Roll out.
•
Maintain and enhance the automation process as required.
o
Not Started- Will start once the application is being used.
o
Not Started- Ensure all the application team can maintain and enhance application and involve other ITS team members as needed in this effort.

Notes:
AWS/Cloud Providers Costing Dashboard
The goal of this project is to implement a dashboard capability to capture everything from total cost, project cost, specific usage cost of GSL’s cloud workspaces.

Action Items:
•
Explore and set up capabilities using AWS’ costing tool.
o
In Progress- Applications team has access and has set up tracking for cost overruns on our GSL AWS development  and production environments.
•
Determine an application that can be used by us and OAR for this type of costing need.
o
Blocked- Need to meet with Tristen an application for this effort. “Cloudability”
•
Work with Cloud architect to integrate tools with Cloud provide set up for capturing the granularity we need.
o
In Progress- Jen working on tagging requirements.
•
Develop and release Costing Dashboard.
o

Notes:
MFA Solutions for SSH Access
The goal of this project is to implement a MultiFactor Authentication (MFA) Solution needed to support SSH capabilities across GSLs system infrastructure (currently a linux system need). We would like to adopt a proven NOAA HPC solution where we can leverage expertise and knowledge gained from their efforts. This will help us build our knowledge base and the HPC team will provide support and assistance  to help us gain the knowledge we need to build and advance this capability. We will work with the HPC team and with the ITS administration team to complete this project.

Action Items:
•
o
In Progress-

Notes:



