let conversions=[
    {num:1000,rom:"M"},
    {num:900,rom:'CM'},
    {num:500,rom: 'D'},
    {num:400,rom:'CD'},
    {num:100,rom:'C'},
    {num:90,rom:'XC'},
    {num:50,rom:'L'},
    {num:40,rom:'XL'},
    {num:10,rom:'X'},
    {num:9,rom:'IX'},
    {num:5,rom:'V'},
    {num:4,rom:'IV'},
    {num:1,rom:'I'}
];
function convert(number){
   let romannumber='';
   for (let i = 0; i < conversions.length; i++) {
       if(conversions[i].num<= number){
           number=number-conversions[i].num;
           romannumber=romannumber+conversions[i].rom;
           i--;
       }
   }
   console.log(romannumber);
}
convert(89);