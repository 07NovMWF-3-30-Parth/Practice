// // 1st way for export JS file
// export function add(num1, num2)
// {
//     return num1+num2;
// }

// export function subs(num1, num2)
// {
//     return num1-num2;
// }

// export function mul(num1, num2)
// {
//     return num1*num2;
// }

// export function division(num1, num2)
// {
//     return num1/num2;
// }

// export function modDiv(num1, num2)
// {
//     return num1%num2;
// }




// 2nd way for export JS file
function add(num1, num2)
{
    return num1+num2;
}

function subs(num1, num2)
{
    return num1-num2;
}

function mul(num1, num2)
{
    return num1*num2;
}

function division(num1, num2)
{
    return num1/num2;
}

function modDiv(num1, num2)
{
    return num1%num2;
}

export {add, subs, mul, division, modDiv};