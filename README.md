## CC18 warehouse api

### env guide

CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

---

## service

## Auth

| method | path            | authen | params | query | body                                                       |
| :----- | :-------------- | :----: | :----- | :---- | :--------------------------------------------------------- |
| post   | /api/register   |   -    | -      | -     | { name , email , password, branch,phone , address , role } |
| post   | /api/login      |   -    | -      | -     | { email, password }                                        |
| post   | /api/current-me |   -    | -      | -     | { token }                                                  |

## Model

| method | path           | authen | params | query | body     |
| :----- | :------------- | :----: | :----- | :---- | :------- |
| post   | /api/model     |   -    | -      | -     | { name } |
| get    | /api/model     |   -    | -      | -     | -        |
| patch  | /api/model/:id |   -    | :id    | -     | { name } |
| delete | /api/model/:id |   -    | :id    | -     | -        |

## Part

| method | path          | authen | params | query | body                            |
| :----- | :------------ | :----: | :----- | :---- | :------------------------------ |
| post   | /api/part     |   -    | -      | -     | { name,detail,sr_number,image } |
| get    | /api/part     |   -    | -      | -     | -                               |
| patch  | /api/part/:id |   -    | :id    | -     | { name,detail,sr_number,image } |
| delete | /api/part/:id |   -    | :id    | -     | -                               |

## Request

| method | path             | authen | params | query | body              |
| :----- | :--------------- | :----: | :----- | :---- | :---------------- |
| post   | /api/request     |   -    | -      | -     | { date,location } |
| get    | /api/request     |   -    | -      | -     | -                 |
| patch  | /api/request/:id |   -    | :id    | -     | { date,location } |
| delete | /api/request/:id |   -    | :id    | -     | -                 |
