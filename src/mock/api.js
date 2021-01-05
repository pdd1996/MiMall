import mock from 'mockjs';

mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id|1-3": 12,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 312312313123,
    "updateTime": 236173891739,
  }
})