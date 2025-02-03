

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "taskNumber": 1,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare report",
                "taskDescription": "Complete the financial report for Q1",
                "taskDate": "2025-01-18",
                "category": "Finance"
            },
            {
                "active": false,
                "taskNumber": 2,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the team sync-up meeting",
                "taskDate": "2025-01-19",
                "category": "Meetings"
            },
            {
                "active": false,
                "taskNumber": 3,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update CRM",
                "taskDescription": "Add client details to the CRM tool",
                "taskDate": "2025-01-20",
                "category": "Operations"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "taskNumber": 1,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported by QA team",
                "taskDate": "2025-01-18",
                "category": "Development"
            },
            {
                "active": false,
                "taskNumber": 4,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Design mockup",
                "taskDescription": "Create mockups for the new landing page",
                "taskDate": "2025-01-20",
                "category": "Design"
            },
            {
                "active": true,
                "taskNumber": 2,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Submit timesheet",
                "taskDescription": "Submit the weekly timesheet",
                "taskDate": "2025-01-22",
                "category": "Admin"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "taskNumber": 1,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the code for the new feature",
                "taskDate": "2025-01-19",
                "category": "Development"
            },
            {
                "active": false,
                "taskNumber": 2,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize workshop",
                "taskDescription": "Plan the upcoming technical workshop",
                "taskDate": "2025-01-21",
                "category": "Training"
            },
            {
                "active": false,
                "taskNumber": 3,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client follow-up",
                "taskDescription": "Follow up with clients on project updates",
                "taskDate": "2025-01-22",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Ananya",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "taskNumber": 1,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update documentation",
                "taskDescription": "Update the project documentation with recent changes",
                "taskDate": "2025-01-18",
                "category": "Documentation"
            },
            {
                "active": false,
                "taskNumber": 2,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct interviews",
                "taskDescription": "Interview candidates for the developer role",
                "taskDate": "2025-01-20",
                "category": "HR"
            },
            {
                "active": false,
                "taskNumber": 3,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy app",
                "taskDescription": "Deploy the new application update",
                "taskDate": "2025-01-22",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Aryan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "taskNumber": 1,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Generate leads",
                "taskDescription": "Research and generate new leads for sales",
                "taskDate": "2025-01-18",
                "category": "Sales"
            },
            {
                "active": false,
                "taskNumber": 3,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create a presentation for the annual review",
                "taskDate": "2025-01-20",
                "category": "Management"
            },
            {
                "active": false,
                "taskNumber": 2,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update inventory",
                "taskDescription": "Ensure inventory records are up-to-date",
                "taskDate": "2025-01-22",
                "category": "Operations"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = ()=>{

   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

//    console.log(employees,admin)
return {employees, admin}
  

}