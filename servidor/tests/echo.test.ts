import{describe,test,expect, afterAll, beforeAll} from 'bun:test';
import{app} from "../src/app"

describe('mensaje ',() =>{
    beforeAll(()=>{
        app.listen(3000)
    })
   test ('el socket debe recibir el mensaje ') 
} )