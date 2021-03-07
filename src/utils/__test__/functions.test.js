import { render, screen } from '@testing-library/react';
import * as funct from '../functions';


describe("Board functions",()=>{
    it("board has 9 boxes", ()=>{
        expect(funct.board).toHaveLength(9);
    });
    describe("setBox()", ()=>{
        it("setBox(1) to add X to the first box",()=>{
            let fc = funct.setBox(1);
            let result = funct.board[0].value;
            expect(fc).toBeTruthy();
            expect(result).toBe("X");
        } );

        it("setBox(9) to add X to the last box",()=>{
            let fc = funct.setBox(9);
            let result = funct.board[8].value;
            expect(fc).toBeTruthy();
            expect(result).toBe("X");
        } );

        it("setBox(10, 30) to return false",()=>{
            let fc = funct.setBox(10,30);
            expect(fc).toBeFalsy();
           
        } );

    });
    
    describe("aScore()", ()=>{
        it("aScore(1,2,3) when boxes 1,2,3 have values",()=>{
            funct.setBox(1,3);
            let result = funct.aScore(1,2,3);
            expect(result).toBeTruthy();
        });
        it("aScore(1,2,3) when boxes 1,2,3 don't have values",()=>{
            let board = funct.board;
            expect(board[0].value).toBe("X");
            expect(board[1].value).toBe("X");
            expect(board[2].value).toBe("X");
            funct.resetBox(1,3);
            let result = funct.aScore(1,2,3);
            
            expect(board[0].value).toBe("");
            expect(board[1].value).toBe("");
            expect(board[2].value).toBe("");
            expect(result).toBeTruthy();
        });
    })
   
})