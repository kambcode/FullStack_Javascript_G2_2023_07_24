const writeData = require("../tarea3.js");
const formatRegisters = require("../tarea1.js");
const fs = require("fs");

it("Should return an array with existing data and added one", async () => {
    await formatRegisters();
    const response = await writeData({
        clientName: "Ivan Hernandez",
        clientDocument: "12893478",
        loanDate: "2022-12-15",
        returnDate: null,
        movie: {
            title: "Batman",
            gender: "Action",
            tags: ["Aventura", "Superheroes", "Crimen"],
        },
    });

    try {
        writtenFileContent = await fs.promises.readFile(
            "registers.txt",
            "binary"
        );
    } catch (err) {
        console.error("Error, expected file dont exists");
        throw new Error('Expected file "registers.txt" dont exists');
    }

    const text = Buffer.from(writtenFileContent).toString();

    expect(text).toEqual(
        "W3siY2xpZW50TmFtZSI6IlN1bHRhbm8gTWFydGluZXoiLCJjbGllbnREb2N1bWVudCI6MTIzMjEzMjEsImxvYW5EYXRlIjoiMjAyMi0xMi0wMSIsInJldHVybkRhdGEiOm51bGwsIm1vdmllIjp7InRpdGxlIjoiU3BpZGVybWFuIDIiLCJnZW5kZXIiOiJBY3Rpb24iLCJ0YWdzIjpbIkF2ZW50dXJhIiwiU3VwZXJoZXJvZXMiLCJDcmltZW4iXX19LHsiY2xpZW50TmFtZSI6IkZ1bGFubyBNYXJ0aW5leiIsImNsaWVudERvY3VtZW50IjozMjM0NDUyLCJsb2FuRGF0ZSI6IjIwMjItMTItMDMiLCJyZXR1cm5EYXRhIjoiMjAyMi0xMi0wNCIsIm1vdmllIjp7InRpdGxlIjoiQXZhdGFyIiwiZ2VuZGVyIjoiQWN0aW9uIiwidGFncyI6WyJBdmVudHVyYSIsIkZ1dHVybyIsIlNjaS1maSJdfX0seyJjbGllbnROYW1lIjoiUm9nZXIgRXNwaW5vemEiLCJjbGllbnREb2N1bWVudCI6MTM0NTY3MjMsImxvYW5EYXRlIjoiMjAyMi0xMi0wNCIsInJldHVybkRhdGEiOiIyMDIyLTEyLTA5IiwibW92aWUiOnsidGl0bGUiOiJFbCBQYWRyaW5vIDIiLCJnZW5kZXIiOiJBY3Rpb24iLCJ0YWdzIjpbIkNyaW1lbiIsIkNsYXNpY29zIiwiTWFmaWEiXX19LHsiY2xpZW50TmFtZSI6Ikl2YW4gSGVybmFuZGV6IiwiY2xpZW50RG9jdW1lbnQiOiIxMjg5MzQ3OCIsImxvYW5EYXRlIjoiMjAyMi0xMi0xNSIsInJldHVybkRhdGUiOm51bGwsIm1vdmllIjp7InRpdGxlIjoiQmF0bWFuIiwiZ2VuZGVyIjoiQWN0aW9uIiwidGFncyI6WyJBdmVudHVyYSIsIlN1cGVyaGVyb2VzIiwiQ3JpbWVuIl19fV0="
    );
    expect(response).toEqual(
        '[{"clientName":"Sultano Martinez","clientDocument":12321321,"loanDate":"2022-12-01","returnData":null,"movie":{"title":"Spiderman 2","gender":"Action","tags":["Aventura","Superheroes","Crimen"]}},{"clientName":"Fulano Martinez","clientDocument":3234452,"loanDate":"2022-12-03","returnData":"2022-12-04","movie":{"title":"Avatar","gender":"Action","tags":["Aventura","Futuro","Sci-fi"]}},{"clientName":"Roger Espinoza","clientDocument":13456723,"loanDate":"2022-12-04","returnData":"2022-12-09","movie":{"title":"El Padrino 2","gender":"Action","tags":["Crimen","Clasicos","Mafia"]}},{"clientName":"Ivan Hernandez","clientDocument":"12893478","loanDate":"2022-12-15","returnDate":null,"movie":{"title":"Batman","gender":"Action","tags":["Aventura","Superheroes","Crimen"]}}]'
    );
});
