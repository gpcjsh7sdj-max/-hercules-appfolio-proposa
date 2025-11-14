// Proposal website JavaScript

// Document content data
const documentContent = {
    proposal: [
        {
            title: "Executive Summary",
            content: `
                <p>Gantzter Designs LLC and AriesDroneServices LLC are pleased to submit this comprehensive proposal for the development, integration, and deployment of an advanced property management website for Hercules Apartments. This proposal outlines a complete solution that transforms your existing website into a powerful, automated property management platform through seamless integration with AppFolio Property Manager, professional GitHub version control and backup systems, and robust GoDaddy hosting infrastructure.</p>
                <p><strong>Project Investment:</strong> $5,000<br>
                <strong>Project Duration:</strong> 4 Weeks (20 Business Days)<br>
                <strong>Deliverables:</strong> Fully integrated website with AppFolio connectivity, GitHub repository with CI/CD pipeline, production deployment on GoDaddy hosting, comprehensive documentation, and training</p>
            `
        },
        {
            title: "Project Scope & Deliverables",
            content: `
                <h3>Phase 1: AppFolio Integration Development</h3>
                <p>The cornerstone of this project is the comprehensive integration between your Hercules Apartments website and AppFolio Property Manager. This integration eliminates duplicate data entry, ensures real-time accuracy of property information, and automates lead management workflows.</p>
                
                <h4>Floor Plans and Availability Synchronization</h4>
                <p>Creates a dynamic connection between AppFolio's unit inventory and your website's floor plans page. Automated synchronization jobs query AppFolio's API hourly to retrieve current unit availability, pricing, specifications, and amenity details. Real-time webhook notifications trigger immediate updates when critical changes occur.</p>
                
                <h4>Lead Capture and Prospect Management</h4>
                <p>Transforms every website interaction into actionable data within AppFolio. When prospects submit forms, request information, or schedule tours, the integration automatically creates corresponding prospect records in AppFolio with complete attribution data.</p>
                
                <h4>Tour Scheduling System</h4>
                <p>Provides sophisticated booking experience that queries AppFolio's calendar API to display available time slots. Confirmed tours create appointments in AppFolio automatically linked to prospect records.</p>
                
                <h3>Phase 2: GitHub Version Control</h3>
                <p>Professional version control through GitHub provides the foundation for reliable, maintainable code and comprehensive disaster recovery capabilities. Includes repository architecture, branching strategy, CI/CD pipeline, and backup/recovery systems.</p>
                
                <h3>Phase 3: GoDaddy Hosting Deployment</h3>
                <p>Production deployment to GoDaddy's Virtual Private Server infrastructure provides performance, reliability, and security. Includes server configuration, SSL/TLS security, performance optimization, monitoring/alerting, and comprehensive backup strategy.</p>
                
                <h3>Phase 4: Documentation and Training</h3>
                <p>Comprehensive documentation ensures your team can effectively use and maintain the integrated system. Includes technical documentation, user guides, operations manual, and hands-on training session.</p>
            `
        },
        {
            title: "Cost Breakdown & Justification",
            content: `
                <h3>Total Project Investment: $5,000</h3>
                
                <h4>Development Labor: $3,600</h4>
                <table>
                    <tr>
                        <th>Week</th>
                        <th>Focus</th>
                        <th>Hours</th>
                        <th>Cost</th>
                    </tr>
                    <tr>
                        <td>Week 1</td>
                        <td>Foundation & API Integration Setup</td>
                        <td>40</td>
                        <td>$1,800</td>
                    </tr>
                    <tr>
                        <td>Week 2</td>
                        <td>Website Integration & Data Sync</td>
                        <td>40</td>
                        <td>$1,800</td>
                    </tr>
                    <tr>
                        <td>Week 3</td>
                        <td>Advanced Features & Resident Portal</td>
                        <td>40</td>
                        <td>$1,800</td>
                    </tr>
                    <tr>
                        <td>Week 4</td>
                        <td>Deployment, Testing & Launch</td>
                        <td>40</td>
                        <td>$1,800</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td></td>
                        <td><strong>160 hrs</strong></td>
                        <td><strong>$7,200</strong></td>
                    </tr>
                </table>
                
                <p><strong>Rate Justification:</strong> The $45/hour rate represents significant discount from typical senior developer rates ($75-150/hour). This competitive rate reflects our commitment to building long-term client relationships.</p>
                
                <h4>Infrastructure & Tooling: $800</h4>
                <ul>
                    <li>Development Environment Setup: $200</li>
                    <li>GitHub Organization & CI/CD: $200</li>
                    <li>GoDaddy Hosting Setup: $200</li>
                    <li>Testing & QA Tools: $200</li>
                </ul>
                
                <h4>Project Management & Documentation: $400</h4>
                <ul>
                    <li>Project Coordination: $200</li>
                    <li>Documentation & Training: $200</li>
                </ul>
                
                <h4>Contingency & Risk Management: $200</h4>
                <p>Buffer for unforeseen technical challenges, ensuring project completion within agreed budget.</p>
            `
        },
        {
            title: "ROI Analysis & Value Proposition",
            content: `
                <h3>First-Year Return on Investment</h3>
                <table>
                    <tr>
                        <th>Benefit Category</th>
                        <th>Annual Value</th>
                    </tr>
                    <tr>
                        <td>Labor Savings (Eliminated Duplicate Entry)</td>
                        <td>$5,200</td>
                    </tr>
                    <tr>
                        <td>Increased Conversion (1 Additional Lease)</td>
                        <td>$15,000</td>
                    </tr>
                    <tr>
                        <td>Improved Retention (2% Improvement)</td>
                        <td>$8,000</td>
                    </tr>
                    <tr>
                        <td>Marketing Efficiency (10% Improvement)</td>
                        <td>$3,000</td>
                    </tr>
                    <tr>
                        <td><strong>Total Annual Benefit</strong></td>
                        <td><strong>$31,200</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Project Investment</strong></td>
                        <td><strong>$5,000</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Net First-Year ROI</strong></td>
                        <td><strong>$26,200 (524%)</strong></td>
                    </tr>
                </table>
                
                <h3>Immediate Benefits</h3>
                <ul>
                    <li><strong>Elimination of Duplicate Data Entry:</strong> Saves 260 hours annually ($5,200 value)</li>
                    <li><strong>Improved Lead Response Time:</strong> 400% increase in conversion with 5-minute response</li>
                    <li><strong>Real-Time Availability Accuracy:</strong> Prevents wasted time showing unavailable units</li>
                    <li><strong>Enhanced Resident Experience:</strong> 24/7 self-service portal improves satisfaction</li>
                </ul>
                
                <h3>Long-Term Strategic Value</h3>
                <ul>
                    <li><strong>Scalability:</strong> Platform supports multiple properties without proportional overhead increases</li>
                    <li><strong>Competitive Differentiation:</strong> Modern integrated website commands 3-5% rent premium</li>
                    <li><strong>Data-Driven Decisions:</strong> Complete lead attribution enables 20-30% better marketing efficiency</li>
                    <li><strong>Operational Excellence:</strong> Technology leadership attracts quality residents and staff</li>
                </ul>
            `
        },
        {
            title: "Payment Terms & Timeline",
            content: `
                <h3>Payment Schedule</h3>
                <table>
                    <tr>
                        <th>Milestone</th>
                        <th>Amount</th>
                        <th>Due</th>
                    </tr>
                    <tr>
                        <td>Deposit</td>
                        <td>$2,000</td>
                        <td>Upon contract signing</td>
                    </tr>
                    <tr>
                        <td>Milestone Payment</td>
                        <td>$1,500</td>
                        <td>Week 2 completion (website integration functional)</td>
                    </tr>
                    <tr>
                        <td>Final Payment</td>
                        <td>$1,500</td>
                        <td>Project completion and client acceptance</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$5,000</strong></td>
                        <td></td>
                    </tr>
                </table>
                
                <h3>Project Timeline</h3>
                <p><strong>Duration:</strong> 4 weeks (20 business days)<br>
                <strong>Start Date:</strong> Upon contract signing and deposit receipt<br>
                <strong>Methodology:</strong> Agile sprints with weekly reviews</p>
                
                <h3>Warranties & Support</h3>
                <p><strong>30-Day Warranty:</strong> All deliverables guaranteed to function as specified for 30 days following completion. Any bugs or issues resolved at no additional cost.</p>
                <p><strong>Ongoing Support:</strong> Available through monthly retainer ($500/month, includes 10 hours support time)</p>
                <p><strong>Emergency Support:</strong> Critical issues addressed promptly at $100/hour (2-hour minimum)</p>
            `
        }
    ],
    technical: [
        {
            title: "Integration Architecture Overview",
            content: `
                <p>The Hercules Apartments AppFolio integration implements a robust, scalable architecture that connects your website with AppFolio Property Manager through secure API communication. The system is designed for reliability, performance, and maintainability.</p>
                
                <h3>Core Components</h3>
                <ul>
                    <li><strong>API Client Library:</strong> OAuth 2.0 authenticated communication with AppFolio Stack API</li>
                    <li><strong>Synchronization Engine:</strong> Automated hourly data sync with intelligent caching</li>
                    <li><strong>Webhook Processor:</strong> Real-time event handling with signature validation</li>
                    <li><strong>Database Layer:</strong> MySQL storage for cached data and application state</li>
                    <li><strong>Frontend Interface:</strong> React components for user interaction</li>
                </ul>
                
                <h3>Technology Stack</h3>
                <table>
                    <tr>
                        <th>Component</th>
                        <th>Technology</th>
                        <th>Purpose</th>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>React 19, TypeScript, Tailwind CSS</td>
                        <td>User interface</td>
                    </tr>
                    <tr>
                        <td>Backend</td>
                        <td>Node.js, Express, tRPC</td>
                        <td>API orchestration</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>MySQL 8.0</td>
                        <td>Data storage</td>
                    </tr>
                    <tr>
                        <td>Cache</td>
                        <td>Redis 7.0</td>
                        <td>Performance optimization</td>
                    </tr>
                    <tr>
                        <td>Integration</td>
                        <td>AppFolio Stack API</td>
                        <td>Property management</td>
                    </tr>
                </table>
            `
        },
        {
            title: "AppFolio API Integration Details",
            content: `
                <h3>Authentication & Security</h3>
                <p>The integration implements OAuth 2.0 authentication flow with AppFolio, ensuring secure, authorized access to property data. Access tokens are automatically refreshed before expiration, maintaining uninterrupted service.</p>
                
                <h4>Security Measures</h4>
                <ul>
                    <li>OAuth 2.0 client credentials flow for server-to-server authentication</li>
                    <li>Webhook signature validation using HMAC-SHA256</li>
                    <li>TLS 1.3 encryption for all API communication</li>
                    <li>Rate limiting to prevent API quota exhaustion</li>
                    <li>Comprehensive error handling and retry logic</li>
                </ul>
                
                <h3>Key API Endpoints</h3>
                <table>
                    <tr>
                        <th>Endpoint</th>
                        <th>Purpose</th>
                        <th>Sync Frequency</th>
                    </tr>
                    <tr>
                        <td>/listings</td>
                        <td>Property listings and details</td>
                        <td>Hourly</td>
                    </tr>
                    <tr>
                        <td>/units</td>
                        <td>Unit information, availability, pricing</td>
                        <td>Hourly</td>
                    </tr>
                    <tr>
                        <td>/prospects</td>
                        <td>Lead creation and management</td>
                        <td>Real-time</td>
                    </tr>
                    <tr>
                        <td>/appointments</td>
                        <td>Tour scheduling</td>
                        <td>Real-time</td>
                    </tr>
                    <tr>
                        <td>/webhooks</td>
                        <td>Event notifications</td>
                        <td>Event-driven</td>
                    </tr>
                </table>
                
                <h3>Data Synchronization Strategy</h3>
                <p>The system implements a hybrid synchronization approach combining scheduled polling with real-time webhooks. Hourly jobs fetch complete datasets to ensure consistency, while webhooks provide immediate updates for time-sensitive changes.</p>
            `
        },
        {
            title: "Development Workflow with VSCode + MCP + Claude",
            content: `
                <h3>Modern Development Environment</h3>
                <p>This project leverages cutting-edge development tools to maximize productivity and code quality. The Visual Studio Code editor is enhanced with Model Context Protocol (MCP) server integration and Claude AI assistance, creating an intelligent development environment.</p>
                
                <h4>VSCode Configuration</h4>
                <ul>
                    <li>TypeScript language server for type checking and IntelliSense</li>
                    <li>ESLint and Prettier for code quality and formatting</li>
                    <li>GitLens for advanced Git integration</li>
                    <li>REST Client for API testing</li>
                    <li>Docker extension for container management</li>
                </ul>
                
                <h4>MCP Server Integration</h4>
                <p>The Model Context Protocol server maintains deep understanding of the entire codebase, including:</p>
                <ul>
                    <li>Project structure and file relationships</li>
                    <li>AppFolio API patterns and data structures</li>
                    <li>Database schemas and query patterns</li>
                    <li>React component hierarchy and props</li>
                    <li>tRPC procedure definitions and types</li>
                </ul>
                
                <h4>Claude AI Assistance</h4>
                <p>Claude AI provides intelligent pair programming capabilities:</p>
                <ul>
                    <li>Context-aware code completion and generation</li>
                    <li>Explanation of complex API responses</li>
                    <li>Suggestion of optimal data structures</li>
                    <li>Debugging assistance with full project context</li>
                    <li>Documentation generation</li>
                </ul>
                
                <h3>Development Acceleration</h3>
                <p>This modern toolchain accelerates development by 40-60% compared to traditional approaches. Tasks that might take hours with manual coding are completed in minutes with AI assistance, while maintaining exceptional code quality.</p>
            `
        },
        {
            title: "Testing & Quality Assurance",
            content: `
                <h3>Comprehensive Testing Strategy</h3>
                <p>The project implements multiple testing levels to ensure reliability and correctness:</p>
                
                <h4>Unit Testing</h4>
                <ul>
                    <li>Jest framework for JavaScript/TypeScript testing</li>
                    <li>80%+ code coverage requirement</li>
                    <li>Isolated testing of individual functions and modules</li>
                    <li>Mock AppFolio API responses for consistent testing</li>
                </ul>
                
                <h4>Integration Testing</h4>
                <ul>
                    <li>Testing of API client library against AppFolio sandbox</li>
                    <li>Database operation verification</li>
                    <li>Webhook processing validation</li>
                    <li>End-to-end workflow testing</li>
                </ul>
                
                <h4>Performance Testing</h4>
                <ul>
                    <li>Load testing to validate concurrent user handling</li>
                    <li>API response time monitoring</li>
                    <li>Database query optimization</li>
                    <li>Cache effectiveness measurement</li>
                </ul>
                
                <h4>Security Testing</h4>
                <ul>
                    <li>npm audit for dependency vulnerabilities</li>
                    <li>CodeQL static security analysis</li>
                    <li>Secret scanning to prevent credential exposure</li>
                    <li>Penetration testing of webhook endpoints</li>
                </ul>
                
                <h3>Continuous Integration</h3>
                <p>All tests run automatically on every code change through GitHub Actions. Pull requests cannot be merged until all tests pass, ensuring consistent quality.</p>
            `
        },
        {
            title: "Monitoring & Performance",
            content: `
                <h3>Application Monitoring</h3>
                <p>Comprehensive monitoring provides visibility into system health and enables proactive issue detection:</p>
                
                <h4>Health Checks</h4>
                <ul>
                    <li>HTTP endpoint returning application status</li>
                    <li>Database connectivity verification</li>
                    <li>Redis cache accessibility</li>
                    <li>AppFolio API reachability</li>
                    <li>Monitored every 60 seconds</li>
                </ul>
                
                <h4>Performance Metrics</h4>
                <ul>
                    <li>API response time tracking</li>
                    <li>Database query performance</li>
                    <li>Cache hit/miss ratios</li>
                    <li>Webhook processing latency</li>
                    <li>Error rate monitoring</li>
                </ul>
                
                <h4>AppFolio Integration Monitoring</h4>
                <ul>
                    <li>API call success/failure rates</li>
                    <li>Sync job execution tracking</li>
                    <li>Webhook delivery monitoring</li>
                    <li>Data freshness indicators</li>
                </ul>
                
                <h3>Alerting</h3>
                <p>Automated alerts notify the team of issues requiring attention:</p>
                <ul>
                    <li>Health check failures trigger immediate alerts</li>
                    <li>Error rate thresholds send notifications</li>
                    <li>Sync job failures alert within 15 minutes</li>
                    <li>Performance degradation warnings</li>
                </ul>
            `
        }
    ],
    timeline: [
        {
            title: "Week 1: Foundation & API Integration Setup",
            content: `
                <h3>Days 1-5: Development Environment & Core Integration</h3>
                
                <h4>Day 1: Environment Setup</h4>
                <ul>
                    <li>Configure VSCode with MCP server and Claude AI integration</li>
                    <li>Set up GitHub repository with branch protection rules</li>
                    <li>Create project structure (client, server, shared directories)</li>
                    <li>Initialize package.json with dependencies</li>
                    <li>Configure TypeScript, ESLint, and Prettier</li>
                </ul>
                
                <h4>Day 2: AppFolio Developer Setup</h4>
                <ul>
                    <li>Obtain AppFolio Stack API credentials</li>
                    <li>Configure OAuth 2.0 client application</li>
                    <li>Set up AppFolio sandbox environment</li>
                    <li>Test API connectivity and authentication</li>
                    <li>Document API endpoints and data structures</li>
                </ul>
                
                <h4>Day 3: API Client Library Development</h4>
                <ul>
                    <li>Implement OAuth 2.0 authentication flow</li>
                    <li>Create base API client with request/response handling</li>
                    <li>Add automatic token refresh logic</li>
                    <li>Implement rate limiting and retry mechanisms</li>
                    <li>Write unit tests for API client</li>
                </ul>
                
                <h4>Day 4: Data Synchronization Engine</h4>
                <ul>
                    <li>Design database schema for cached AppFolio data</li>
                    <li>Implement sync jobs for listings and units</li>
                    <li>Create caching layer with Redis</li>
                    <li>Add error handling and logging</li>
                    <li>Test synchronization with sandbox data</li>
                </ul>
                
                <h4>Day 5: Testing & Documentation</h4>
                <ul>
                    <li>Write integration tests for API client</li>
                    <li>Document API client usage and examples</li>
                    <li>Create developer setup guide</li>
                    <li>Code review and refactoring</li>
                    <li>Week 1 milestone review</li>
                </ul>
                
                <p><strong>Week 1 Milestone:</strong> API authentication working, first successful data sync from AppFolio</p>
            `
        },
        {
            title: "Week 2: Website Integration & Data Synchronization",
            content: `
                <h3>Days 6-10: Frontend Integration & Lead Management</h3>
                
                <h4>Day 6: Floor Plans Page Integration</h4>
                <ul>
                    <li>Create tRPC procedures for floor plan data</li>
                    <li>Build React components for floor plan display</li>
                    <li>Implement filtering by bedrooms, price, sqft</li>
                    <li>Add real-time availability indicators</li>
                    <li>Style with Tailwind CSS</li>
                </ul>
                
                <h4>Day 7: Automated Synchronization</h4>
                <ul>
                    <li>Set up cron jobs for hourly sync</li>
                    <li>Implement intelligent cache invalidation</li>
                    <li>Add sync status monitoring dashboard</li>
                    <li>Create admin notifications for sync failures</li>
                    <li>Test sync reliability and performance</li>
                </ul>
                
                <h4>Day 8: Contact Form & Lead Capture</h4>
                <ul>
                    <li>Build contact form with validation</li>
                    <li>Create tRPC procedure to submit leads to AppFolio</li>
                    <li>Implement duplicate detection logic</li>
                    <li>Add lead source attribution (UTM parameters)</li>
                    <li>Send confirmation emails</li>
                </ul>
                
                <h4>Day 9: Tour Scheduling System</h4>
                <ul>
                    <li>Query AppFolio calendar API for availability</li>
                    <li>Build interactive calendar component</li>
                    <li>Create appointment booking flow</li>
                    <li>Link appointments to prospect records</li>
                    <li>Send confirmation and reminder emails</li>
                </ul>
                
                <h4>Day 10: Admin Dashboard & Testing</h4>
                <ul>
                    <li>Create admin dashboard for sync status</li>
                    <li>Display lead metrics and attribution data</li>
                    <li>Add manual sync trigger capability</li>
                    <li>Comprehensive end-to-end testing</li>
                    <li>Week 2 milestone review and client demo</li>
                </ul>
                
                <p><strong>Week 2 Milestone:</strong> Floor plans showing real-time availability, first prospect created in AppFolio from website</p>
            `
        },
        {
            title: "Week 3: Advanced Features & Resident Portal",
            content: `
                <h3>Days 11-15: Real-Time Integration & Resident Services</h3>
                
                <h4>Day 11: Webhook Integration</h4>
                <ul>
                    <li>Set up webhook endpoint with signature validation</li>
                    <li>Subscribe to AppFolio webhook events</li>
                    <li>Implement asynchronous event processing</li>
                    <li>Add retry logic and dead letter queue</li>
                    <li>Test webhook delivery and processing</li>
                </ul>
                
                <h4>Day 12: Real-Time Updates</h4>
                <ul>
                    <li>Process unit availability change events</li>
                    <li>Handle pricing update notifications</li>
                    <li>Invalidate caches on relevant events</li>
                    <li>Update frontend in real-time</li>
                    <li>Monitor webhook reliability</li>
                </ul>
                
                <h4>Day 13: Resident Portal Foundation</h4>
                <ul>
                    <li>Implement single sign-on with AppFolio</li>
                    <li>Create resident authentication flow</li>
                    <li>Build account information dashboard</li>
                    <li>Display lease details and payment history</li>
                    <li>Add security and session management</li>
                </ul>
                
                <h4>Day 14: Maintenance Request System</h4>
                <ul>
                    <li>Build maintenance request submission form</li>
                    <li>Create work orders in AppFolio</li>
                    <li>Display work order status updates</li>
                    <li>Add photo upload capability</li>
                    <li>Send confirmation notifications</li>
                </ul>
                
                <h4>Day 15: Testing & Refinement</h4>
                <ul>
                    <li>Comprehensive security testing</li>
                    <li>Performance optimization</li>
                    <li>User experience refinement</li>
                    <li>Documentation updates</li>
                    <li>Week 3 milestone review</li>
                </ul>
                
                <p><strong>Week 3 Milestone:</strong> Webhooks delivering real-time updates, resident portal functional</p>
            `
        },
        {
            title: "Week 4: Deployment, Testing & Launch",
            content: `
                <h3>Days 16-20: Production Deployment & Go-Live</h3>
                
                <h4>Day 16: GitHub Repository Organization</h4>
                <ul>
                    <li>Organize code into logical modules</li>
                    <li>Write comprehensive README documentation</li>
                    <li>Add API integration examples</li>
                    <li>Create troubleshooting guide</li>
                    <li>Document deployment procedures</li>
                </ul>
                
                <h4>Day 17: CI/CD Pipeline Implementation</h4>
                <ul>
                    <li>Create GitHub Actions workflows</li>
                    <li>Configure automated testing on pull requests</li>
                    <li>Set up staging deployment automation</li>
                    <li>Implement production deployment with approval</li>
                    <li>Test pipeline end-to-end</li>
                </ul>
                
                <h4>Day 18: GoDaddy VPS Setup</h4>
                <ul>
                    <li>Provision VPS instance</li>
                    <li>Install and configure Ubuntu, Node.js, MySQL, Redis, Nginx</li>
                    <li>Harden server security (firewall, fail2ban, SSH keys)</li>
                    <li>Configure SSL certificates with Let's Encrypt</li>
                    <li>Set up monitoring and alerting</li>
                </ul>
                
                <h4>Day 19: Production Deployment & Testing</h4>
                <ul>
                    <li>Deploy application to production server</li>
                    <li>Run database migrations</li>
                    <li>Configure environment variables</li>
                    <li>Comprehensive production testing</li>
                    <li>Performance and security validation</li>
                </ul>
                
                <h4>Day 20: Training & Launch</h4>
                <ul>
                    <li>Conduct team training session</li>
                    <li>Provide user guides and documentation</li>
                    <li>Final client walkthrough</li>
                    <li>Production launch</li>
                    <li>Post-launch monitoring and support</li>
                </ul>
                
                <p><strong>Week 4 Milestone:</strong> Website live in production, all features tested and validated, team trained</p>
            `
        },
        {
            title: "Agile Methodology & Quality Assurance",
            content: `
                <h3>Sprint Structure</h3>
                <p>The project follows an agile development approach with weekly sprints. Each sprint includes planning, daily standups, development, testing, and review.</p>
                
                <h4>Daily Standup Meetings (15 minutes)</h4>
                <ul>
                    <li>What was accomplished yesterday</li>
                    <li>What will be accomplished today</li>
                    <li>Any blockers or issues</li>
                    <li>Keeps team aligned and identifies problems early</li>
                </ul>
                
                <h4>Weekly Sprint Reviews</h4>
                <ul>
                    <li>Demonstrate completed features to client</li>
                    <li>Gather feedback and adjust priorities</li>
                    <li>Review sprint metrics and progress</li>
                    <li>Plan next sprint goals</li>
                </ul>
                
                <h4>Sprint Retrospectives</h4>
                <ul>
                    <li>What went well this sprint</li>
                    <li>What could be improved</li>
                    <li>Action items for process improvement</li>
                    <li>Continuous improvement focus</li>
                </ul>
                
                <h3>Quality Assurance Process</h3>
                <ul>
                    <li><strong>Code Reviews:</strong> All code reviewed by senior developer before merge</li>
                    <li><strong>Automated Testing:</strong> Unit, integration, and E2E tests run on every commit</li>
                    <li><strong>Manual Testing:</strong> User acceptance testing for all features</li>
                    <li><strong>Performance Testing:</strong> Load testing to validate scalability</li>
                    <li><strong>Security Testing:</strong> Vulnerability scanning and penetration testing</li>
                </ul>
                
                <h3>Risk Management</h3>
                <p>The project includes contingency time for unexpected challenges:</p>
                <ul>
                    <li>AppFolio API changes or limitations</li>
                    <li>Integration complexity discoveries</li>
                    <li>Performance optimization requirements</li>
                    <li>Security hardening needs</li>
                </ul>
            `
        }
    ],
    architecture: [
        {
            title: "GitHub Repository Architecture",
            content: `
                <h3>Repository Structure</h3>
                <p>The GitHub repository serves as the single source of truth for all application code, configuration, and documentation.</p>
                
                <h4>Directory Organization</h4>
                <ul>
                    <li><code>client/</code> - React frontend application</li>
                    <li><code>server/</code> - Node.js backend with AppFolio integration</li>
                    <li><code>drizzle/</code> - Database schemas and migrations</li>
                    <li><code>shared/</code> - Code shared between frontend and backend</li>
                    <li><code>.github/workflows/</code> - CI/CD pipeline definitions</li>
                    <li><code>docs/</code> - Technical documentation</li>
                </ul>
                
                <h3>Branching Strategy</h3>
                <ul>
                    <li><strong>main</strong> - Production-ready code, protected branch</li>
                    <li><strong>development</strong> - Integration branch for features</li>
                    <li><strong>feature/*</strong> - Individual feature development</li>
                    <li><strong>hotfix/*</strong> - Emergency production fixes</li>
                </ul>
                
                <h4>Branch Protection Rules</h4>
                <ul>
                    <li>Require pull request reviews (minimum 1 approval)</li>
                    <li>Require status checks to pass before merging</li>
                    <li>Require branches to be up to date before merging</li>
                    <li>Prevent force pushes and deletions</li>
                </ul>
                
                <h3>CI/CD Pipeline</h3>
                <p>GitHub Actions automates testing and deployment:</p>
                <ul>
                    <li><strong>Pull Request Workflow:</strong> Linting, unit tests, integration tests, security scanning</li>
                    <li><strong>Staging Deployment:</strong> Automatic deployment to staging on merge to development</li>
                    <li><strong>Production Deployment:</strong> Manual approval required, automated deployment to production</li>
                    <li><strong>Rollback Workflow:</strong> Quick restoration of previous version if issues detected</li>
                </ul>
            `
        },
        {
            title: "GoDaddy VPS Configuration",
            content: `
                <h3>Server Specifications</h3>
                <table>
                    <tr>
                        <th>Component</th>
                        <th>Specification</th>
                    </tr>
                    <tr>
                        <td>CPU</td>
                        <td>4 Cores</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>8 GB</td>
                    </tr>
                    <tr>
                        <td>Storage</td>
                        <td>160 GB SSD</td>
                    </tr>
                    <tr>
                        <td>Bandwidth</td>
                        <td>10 TB/month</td>
                    </tr>
                    <tr>
                        <td>Operating System</td>
                        <td>Ubuntu 22.04 LTS</td>
                    </tr>
                </table>
                
                <h3>Application Stack</h3>
                <ul>
                    <li><strong>Node.js 20 LTS:</strong> Runtime for backend application</li>
                    <li><strong>MySQL 8.0:</strong> Primary database for application data</li>
                    <li><strong>Redis 7.0:</strong> Cache and session storage</li>
                    <li><strong>Nginx:</strong> Reverse proxy and SSL termination</li>
                    <li><strong>PM2:</strong> Process management and clustering</li>
                </ul>
                
                <h3>Security Hardening</h3>
                <ul>
                    <li>SSH key-based authentication only (password login disabled)</li>
                    <li>UFW firewall allowing only ports 22, 80, 443</li>
                    <li>Fail2ban for brute force protection</li>
                    <li>Automatic security updates enabled</li>
                    <li>Regular security audits and vulnerability scanning</li>
                </ul>
                
                <h3>SSL/TLS Configuration</h3>
                <ul>
                    <li>Let's Encrypt SSL certificates (free, auto-renewing)</li>
                    <li>TLS 1.2 and 1.3 only (older versions disabled)</li>
                    <li>Strong cipher suites configured</li>
                    <li>HSTS enabled to prevent downgrade attacks</li>
                    <li>SSL Labs A+ rating achieved</li>
                </ul>
            `
        },
        {
            title: "Backup & Disaster Recovery",
            content: `
                <h3>Code Backup Strategy</h3>
                <p>GitHub provides primary backup with multiple layers of redundancy:</p>
                <ul>
                    <li>Automatic replication across GitHub's data centers</li>
                    <li>Complete commit history preserved indefinitely</li>
                    <li>Branch protection prevents accidental deletion</li>
                    <li>Weekly exports to AWS S3 for additional redundancy</li>
                </ul>
                
                <h3>Database Backup Strategy</h3>
                <h4>Automated Daily Backups</h4>
                <ul>
                    <li>Full MySQL dump created nightly during low-traffic period</li>
                    <li>Compressed and encrypted before storage</li>
                    <li>Uploaded to secure cloud storage (AWS S3 or equivalent)</li>
                    <li>Backup integrity verified automatically</li>
                </ul>
                
                <h4>Transaction Log Backups</h4>
                <ul>
                    <li>Hourly transaction log backups for point-in-time recovery</li>
                    <li>Enables restoration to any moment within retention period</li>
                    <li>Minimizes data loss in disaster scenarios</li>
                </ul>
                
                <h4>Backup Retention</h4>
                <ul>
                    <li>Daily backups retained for 7 days</li>
                    <li>Weekly backups retained for 4 weeks</li>
                    <li>Monthly backups retained for 12 months</li>
                </ul>
                
                <h3>Disaster Recovery</h3>
                <h4>Recovery Time Objective (RTO): 4 hours</h4>
                <p>Maximum time to restore full service after complete failure</p>
                
                <h4>Recovery Point Objective (RPO): 1 hour</h4>
                <p>Maximum acceptable data loss (hourly transaction log backups)</p>
                
                <h4>Recovery Procedures</h4>
                <ul>
                    <li>Documented step-by-step restoration process</li>
                    <li>Quarterly disaster recovery drills to validate procedures</li>
                    <li>Automated server provisioning scripts</li>
                    <li>Database restoration tested monthly</li>
                </ul>
            `
        },
        {
            title: "Monitoring & Alerting",
            content: `
                <h3>Application Monitoring</h3>
                <h4>Health Check Endpoints</h4>
                <ul>
                    <li>HTTP endpoint returning application status</li>
                    <li>Verifies database connectivity</li>
                    <li>Tests Redis cache accessibility</li>
                    <li>Validates AppFolio API reachability</li>
                    <li>Monitored every 60 seconds by external service</li>
                </ul>
                
                <h4>Performance Metrics</h4>
                <ul>
                    <li>API response time tracking</li>
                    <li>Database query performance</li>
                    <li>Cache hit/miss ratios</li>
                    <li>Error rate monitoring</li>
                    <li>Throughput and concurrent users</li>
                </ul>
                
                <h3>Infrastructure Monitoring</h3>
                <ul>
                    <li><strong>CPU Usage:</strong> Alert if sustained >80%</li>
                    <li><strong>Memory Usage:</strong> Alert if >85%</li>
                    <li><strong>Disk Space:</strong> Alert if >80% full</li>
                    <li><strong>Network Traffic:</strong> Monitor bandwidth usage</li>
                    <li><strong>Service Status:</strong> Verify all services running</li>
                </ul>
                
                <h3>AppFolio Integration Monitoring</h3>
                <ul>
                    <li>API call success/failure rates</li>
                    <li>Sync job execution and completion</li>
                    <li>Webhook delivery and processing</li>
                    <li>Data freshness indicators</li>
                    <li>Integration error tracking</li>
                </ul>
                
                <h3>Alerting</h3>
                <h4>Critical Alerts (Immediate notification)</h4>
                <ul>
                    <li>Health check failures</li>
                    <li>Service crashes or restarts</li>
                    <li>Database connectivity issues</li>
                    <li>AppFolio API authentication failures</li>
                </ul>
                
                <h4>Warning Alerts (15-minute delay)</h4>
                <ul>
                    <li>Resource usage approaching limits</li>
                    <li>Sync job delays or failures</li>
                    <li>Elevated error rates</li>
                    <li>Performance degradation</li>
                </ul>
            `
        },
        {
            title: "Infrastructure Costs & Scalability",
            content: `
                <h3>Annual Infrastructure Costs</h3>
                <table>
                    <tr>
                        <th>Component</th>
                        <th>Monthly Cost</th>
                        <th>Annual Cost</th>
                    </tr>
                    <tr>
                        <td>GoDaddy VPS (4 CPU, 8GB RAM)</td>
                        <td>$79.99</td>
                        <td>$959.88</td>
                    </tr>
                    <tr>
                        <td>GitHub Team Plan</td>
                        <td>$21.00</td>
                        <td>$252.00</td>
                    </tr>
                    <tr>
                        <td>Backup Storage (100GB)</td>
                        <td>$10.00</td>
                        <td>$120.00</td>
                    </tr>
                    <tr>
                        <td>Domain Registration</td>
                        <td>$1.67</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>SSL Certificate</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$112.66</strong></td>
                        <td><strong>$1,351.88</strong></td>
                    </tr>
                </table>
                
                <h3>Scalability Options</h3>
                <h4>Vertical Scaling</h4>
                <p>Upgrade to larger VPS instance as traffic grows:</p>
                <ul>
                    <li><strong>Current:</strong> 4 CPU, 8GB RAM ($80/month)</li>
                    <li><strong>Next Tier:</strong> 8 CPU, 16GB RAM ($160/month)</li>
                    <li><strong>Enterprise:</strong> 16 CPU, 32GB RAM ($320/month)</li>
                </ul>
                
                <h4>Horizontal Scaling</h4>
                <p>For significant growth, architecture supports multi-server deployment:</p>
                <ul>
                    <li>Load balancer distributing traffic across app servers</li>
                    <li>Database replication for read scaling</li>
                    <li>Redis cluster for distributed caching</li>
                    <li>CDN integration for static asset delivery</li>
                </ul>
                
                <h3>Performance Optimization</h3>
                <p>Before scaling infrastructure, optimize existing resources:</p>
                <ul>
                    <li>Database query optimization and indexing</li>
                    <li>Caching strategy refinement</li>
                    <li>Code profiling and optimization</li>
                    <li>Image optimization and lazy loading</li>
                    <li>API response compression</li>
                </ul>
            `
        }
    ]
};

// Initialize accordions
function initializeAccordions() {
    // Populate proposal accordion
    populateAccordion('proposal-accordion', documentContent.proposal);
    populateAccordion('technical-accordion', documentContent.technical);
    populateAccordion('timeline-accordion', documentContent.timeline);
    populateAccordion('architecture-accordion', documentContent.architecture);
}

// Populate accordion with content
function populateAccordion(accordionId, items) {
    const accordion = document.getElementById(accordionId);
    if (!accordion) return;
    
    items.forEach((item, index) => {
        const accordionItem = createAccordionItem(item, index);
        accordion.appendChild(accordionItem);
    });
}

// Create accordion item
function createAccordionItem(item, index) {
    const div = document.createElement('div');
    div.className = 'accordion-item';
    
    div.innerHTML = `
        <div class="accordion-header">
            <h3 class="accordion-title">${item.title}</h3>
            <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-content">
            <div class="accordion-body">
                ${item.content}
            </div>
        </div>
    `;
    
    const header = div.querySelector('.accordion-header');
    const content = div.querySelector('.accordion-content');
    
    header.addEventListener('click', () => {
        const isActive = div.classList.contains('active');
        
        // Close all other accordion items in the same accordion
        const allItems = div.parentElement.querySelectorAll('.accordion-item');
        allItems.forEach(otherItem => {
            if (otherItem !== div) {
                otherItem.classList.remove('active');
                const otherContent = otherItem.querySelector('.accordion-content');
                otherContent.style.maxHeight = null;
            }
        });
        
        // Toggle current item
        if (isActive) {
            div.classList.remove('active');
            content.style.maxHeight = null;
        } else {
            div.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
    
    return div;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAccordions);
} else {
    initializeAccordions();
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    }
});
