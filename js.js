function test ()  {
    return Math.floor(Math.random() * 6 + 1);
}

for(let i = 0 ; i < 100; i++){
    console.log(test());
}
