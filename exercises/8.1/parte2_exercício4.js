let string = `Tryber x aqui! 
Tudo bem?`

let newString = `Bot`


const stringReplacer = string => {
        let replacedString = string.replace(/[x]/gi, `${newString}`);
        return replacedString;
    }
console.log(stringReplacer(string));


const skills = ["Javascript", "HTML", "ShellScript", "CSS", "Whatever"]
const returnedString = stringReplacer(string);

const stringConcatenator = returnedString => {
    const orgSkills = skills.sort();
    const finalString = `${returnedString} \nMinhas habilidades principais são: ${orgSkills}`;
    return finalString;
}
console.log(stringConcatenator(returnedString))