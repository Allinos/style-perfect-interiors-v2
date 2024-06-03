# API for NORMAL PROJECT 

### API for employee list per normal project - GET
http://localhost:3000/apiv1/employee/1/1    
<!-- :dealId/:catId -->

### API for adding employee from normal project - POST
http://localhost:3000/apiv1/add-employee-to-project


### API for updating task status to normal project - PUT
http://localhost:3000/apiv1/update-task-status
<!-- status, dealId, catId -->

### API for updating task deadline to normal project - PUT
http://localhost:3000/apiv1/update-task-deadline
<!-- date, dealId, catId -->

### API for removing employee from normal project - DELETE
http://localhost:3000/apiv1/removeempnp?dealId=18&catId=1&emid=1&removeDate=23/09/2002

### API for getting all subtasks for normal project - GET
http://localhost:3000/admin/settings/get-subtask

### API for adding subtasks to normal project - POST
http://localhost:3000/apiv1/addsubtaskto-nproject
<!-- {
  "ndeal_id" : 1,
  "category_id" : 1,
  "stask_id" : 1
} -->

### API for updating subtask status in normal project - PUT
http://localhost:3000/apiv1/update-subtask-status
<!-- status, dealId, catId, staskId -->

### API for deleting subtasks from normal project - DELETE
http://localhost:3000/apiv1/delete-subtask?dealId=1&catId=1&staskId=1


# API for TASK OF NORMAL PROJECTS TASK (category)

### API for deleting tasks from normal projects - DELETE
http://localhost:3000/apiv1/delete-task?dealId=1&catId=2

### API for normal project finance updateing advance pay recieved - PUT
http://localhost:3000/admin/finance/update-advancepay
{
  "amount_got" : 1000,
  "dateofpay" : "12/02/2023",
  "modeofpay" : "online",
  "ndeal_id" : 13,
  "task" : 2
} 


# API for MISC PROJECT 

### API for misc project to add employee - POST
http://localhost:3000/apiv1/add-employee-to-miscproject
{
    "mdeal_id" : 1,
    "mstask_id" : 1,
    "mpemid" : 2,
    "dateofassign" : "23/08/2023",
    "task" : "ita gotha",
    "project" : "Latin Bonua"  
}

### API for misc project to remove employee - DELETE
http://localhost:3000/apiv1/remove-emp-miscp?mdeal_id=1&mstask_id=1&mpemid=2&dateofremove=23/09/23&task=ita+gota&project=Latin+bonua


### API for update misc projects subtask status - UPDATE
http://localhost:3000/apiv1/update-misctask-status
{
  "mdeal_id" : 1,
  "mstask_id" : 1,
  "mstask_status" : "completed",
  "dateofstatus" : "28/03/2033"
}

### API for misc project finance updateing advance pay recieved - PUT
http://localhost:3000/admin/finance/update-advancepay-mp
{
  "dateofpay" : "12/02/2023",
  "modeofpay" : "online",
  "ndeal_id" : 13,
  "task" : 2
} 





<!-- project data to inventory -->

### Api for getting project data to inventory - GET
http://localhost:3000/apiv1/get-pname-from-ref?ref=101

### Api for getting project data to inventory - GET
http://localhost:3000/apiv1/get-all-ref

<!-- Materials list routes--- -->



### Api for adding materials name - POST
http://localhost:3000/apiv1/add-material-to-list
<!-- {
  "material" : "chips"
} -->


### Api for getting materials name - POST
http://localhost:3000/apiv1/get-material-from-list



### Api for deleting materials name - DELETE
http://localhost:3000/apiv1/remove-material-from-list?mnid=1


<!-- Inventory to project  -->


### Api for adding materials to projects - POST
http://localhost:3000/apiv1/add-material-to-project
<!-- {
  "pid" : 1,
  "items" : [
    {"item" : "swipe machine", "qnt" : "2pc", "amount" : 300 },
    {"item" : "ins paper", "qnt" : "2bundle", "amount" : 300 },
    {"item" : "ink", "qnt" : "2kg", "amount" : 300 }
  ]
} -->

### Api for getting materials from each projects - GET
http://localhost:3000/apiv1/get-material-from-project?pid=1


### Api for updating materials from each projects - PUT
http://localhost:3000/apiv1/update-material-from-project
<!-- {
  "item" : "ink black",
  "qnt" : "2 bottle",
  "amount" : 300,
  "materialid" : 10,
  "pid" : 1
} -->


### Api for deleting materials from each projects - DELETE
http://localhost:3000/apiv1/delete-material-from-project?muid=8&pid=1




<!-- Left Stock -->


### Api for adding materials to projects - POST
http://localhost:3000/apiv1/add-material-to-leftstock

<!-- {
  "pid" : 1,
  "items" : [
    {"item" : "swipe machine", "qnt" : "1pc", "amount" : 150 }
    
  ]
} -->

### Api for getting materials from left stock - GET
http://localhost:3000/apiv1/get-material-from-leftstock?pid=1



### Api for updating materials in left stock - PUT
http://localhost:3000/api1/update-material-to-leftstock
<!-- {
  "pid": 1,
  "materialid": 2,
  "item": "sand",
  "qnt": "20 balti",
  "amount": 500
} -->


### Api for deleting materials in left stock - DELETE
http://localhost:3000/apiv1/remove-material-from-leftstock?mlid=1&pid=1




<!-- finance  -->


### Api for adding finance - POST
http://localhost:3000/admin/finance/add-payments
<!-- {
  "ndeal_id" : 2,
  "amount_got" : 2000,
  "dateofpay" : "23/09/2003",
  "modeofpay" : "online"
} -->



### Api for updating finance - PUT
http://localhost:3000/admin/finance/update-payments
<!-- {
  "pid": 2,
  "fid": 4,
  "amount_got": 2001,
  "dateofpay": "2/2/2",
  "modeofpay": "online"
} -->



### Api for deleting finance - DELETE
http://localhost:3000/admin/finance/delete-payments?pid=2&fid=4


<!-- Employee new routes -->


### API for adding contractual employee to normal project - POST
http://localhost:3000/apiv1/add-contract-employee
<!-- {
  "ndealid" : 1,
  "catid" : 2,
  "emp" : "bhavadeep",
  "desig" : "mistri"
} -->

### API for deleting contractual employee to project - DELETE
http://localhost:3000/apiv1/delete-contract-employee?ndealid=1&catid=2&empid=2


### API for getting contractual employee to project - GET
http://localhost:3000/apiv1/get-contract-emp-to-project?dealId=1&catId=1

