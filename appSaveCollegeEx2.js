var student = [
    {
        name: 'João',
        height: 160,
        age: 25,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 8.5,
    },
    {
        name: 'Maria',
        height: 170,
        age: 33,
        gender: 'feminino',
        classroom: 'Trindade',
        math: 8.0,
    },
    {
        name: 'Joana',
        height: 165,
        age: 45,
        gender: 'feminino',
        classroom: 'Trindade',
        math: 6.5,
    },
    {
        name: 'Pedro',
        height: 175,
        age: 22,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 7.0,
    },
    {
        name: 'Antônio',
        height: 183,
        age: 38,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 9.5,
    },
];

var media = (student[0].math + student[1].math + student[2].math + student[3].math + student[4].math)/5
console.log("A média dos alunos da série Trindade é " + media);

