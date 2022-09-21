import superagent from "superagent";

const baseURL: string = "https://reqres.in/api";
let response: any;


describe("HTTPS methods tests", () => {
beforeEach(() => {
    response = null;
})
    test("Should correctly read GET response", async () => {
      try {
    response = await superagent.get(`${baseURL}/users`);
      } catch(err: any) {
        throw new Error(err.massage);
      };
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBe(6);
    });

    test("Should correctly read GET response with queries", async () => {
        try {
            response = await superagent.get(`${baseURL}/users`).query({ page: 1 });
        } catch(err: any) {
            throw new Error(err.massage);
          };
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBe(6);
    });

    test("Should correctly read GET response with 404 status code", async () => {
        try {
            response = await superagent.get(`${baseURL}/users/24`);
        } catch(err: any) {
            expect(err.status).toBe(404);
            expect(err.response.text).toEqual('{}');
          };
    });

    test("Should correctly read POST response", async () => {
       try { response = await superagent.post(`${baseURL}/users`)
        .set("Content-Type", "application/json")
        .send({name: "Lyubov", surname: "Bliznyukovich"});
    } catch(err: any) {
        throw new Error(err.massage);
    };
      expect(response.status).toBe(201);
      expect(response.body.name).toEqual("Lyubov");
      expect(response.body.surname).toEqual("Bliznyukovich");
    });

    test("Should correctly read POST response with 400 status code ", async () => {
        try { 
        response = await superagent.post(`${baseURL}/register`)
        .set("Content-Type", "application/json")
        .send({password: "123456"});
    } catch(err: any) {
        expect(err.status).toBe(400);
        expect(JSON.parse(err.response.text)).toEqual({ error: "Missing email or username" });
    };
    });

    test("Should correctly read PATCH response", async () => {
        try {response = await superagent.patch(`${baseURL}/users/2`)
        .set("Content-Type", "application/json")
        .send({name: "accountant"});
    } catch(err: any) {
        throw new Error(err.massage);
      };
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual("accountant");
    });

    test("Should correctly read PATCH response  with 404 status", async () => {
        try {response = await superagent.patch(`${baseURL}//users/2`)
        .set("Content-Type", "application/json")
        .send({name: "accountant"});
    } catch(err: any) {
        expect(err.status).toBe(404);
    };
    });

    test("Should correctly read PUT response", async () => {
       try { response = await superagent.put(`${baseURL}/users/2`)
        .set("Content-Type", "application/json")
        .send({name: "Lyuba", surname: "Blznkvch"}); 
    } catch(err: any) {
        throw new Error(err.massage);
    };
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual("Lyuba");
        expect(response.body.surname).toEqual("Blznkvch");
    });

    test("Should correctly read PUT response with 404 status", async () => {
        try { response = await superagent.put(`${baseURL}//users/2`)
         .set("Content-Type", "application/json")
         .send({name: "Lyuba", surname: "Blznkvch"}); 
    } catch(err: any) {
         expect(err.status).toBe(404);
    };
    });

    test("Should correctly read DELETE response", async () => {
        try { response = await superagent.delete(`${baseURL}/users/2`);    
    } catch(err: any) {
        throw new Error(err.massage);
    };
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    });

    test("Should correctly read DELETE response with 404 status code ", async () => {
         try { 
        response = await superagent.delete(`${baseURL}/`);
    } catch(err: any) {
        expect(err.status).toBe(404);
    };
    });
    });
