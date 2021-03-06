import expect from 'expect';
import df from 'deep-freeze-strict';

var reducers = require('reducers');


describe('Reducers',()=>{
   describe('Search Text',()=>{
      it('should set search text properly',()=>{
          let action = {
              type:"SET_SEARCH_TEXT",
              searchText:"dog"
          };
       
          let res = reducers.searchText(df(''),df(action));
          expect(res).toEqual(action.searchText);
      }); 
   });
  describe('show Completed todos',()=>{
     it('should toggle show completed todos',()=>{
         let action = {
             type:"TOGGLE_SHOW_COMPLETED",
         };
            
        let res = reducers.showCompleted(df(false),df(action));
         expect(res).toBe(true);
     }); 
  });
 describe('Add todos',()=>{
    it('should add todos properly',()=>{
        let action ={
          type:"ADD_TODO",
          newTodo:"start node js"
        }
        
        let res = reducers.addtodoReducer(df([]),df(action));
        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.newTodo);
    }); 
    
    it("should toogle todos with matching ids",()=>{
       let todos =
             [{
                   id:1,    
                   text:"finish redux",  
                   completed:true,
                   createdAt:9,
                   completedAt:125,
               }]; 
        
         let action ={
          type:"TOGGLE_TODO_ID",
          id:1
        }
         
        let res = reducers.addtodoReducer(df(todos),df(action));
        expect(res[0].completed).toEqual(false);
        expect(res[0].completedAt).toEqual(undefined);
    });
 });
});