/*Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi
programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo’lmagan yilda 365 kun bor.
Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400
ga karrali bo’lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili
emas. 1200 va 2000 kabisa yili.*/
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        return true;
    return false;
}
function getDaysInYear(year) {
    if (isLeapYear(year))
        return 366;
    return 365;
}
// test case
// console.log('300-yilda ' + getDaysInYear(300), 'kun bor');
//----------------------------------question number 2---------------------------------------------------
// Uchta son berilgan. Shu sonlarning kichigini aniqlovchi programma tuzilsin.
var numbers = [5, 2, 3];
var smallNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (smallNumber > numbers[i])
        smallNumber = numbers[i];
}
// console.log(smallNumber);
//----------------------------------question number 3---------------------------------------------------
/*haqiqiy sonlari berilgan. Ularning kichigini sonlar yig’indisining yarmiga, kattasini
ko’paytmasining ikkilanganiga almashtiruvchi programma tuzilsin. Agar sonlar teng
bo'lsa, o'zgarishsiz qoldirilsin.*/
var x = 6;
var y = 6;
// console.log(`Incoming x is ${x} and y is ${y}`);
var halfOfSum = (x + y) / 2;
var doubleOfMultiple = (x * y) * 2;
if (x === y) {
}
else if (x < y) {
    x = halfOfSum;
    y = doubleOfMultiple;
}
else {
    x = doubleOfMultiple;
    y = halfOfSum;
}
function nextDayGetter(day, month) {
    if (day > 31)
        return "Bunday sana yo'q";
    if (month > 12)
        return "Bunday oy yo'q";
    if (day < 31)
        day += 1;
    else {
        day = 1;
        if (month < 12)
            month += 1;
        else {
            month = 1;
        }
    }
    if (month === 2) {
        if (day < 28)
            day += 1;
    }
    return [day, month];
}
// console.log(nextDayGetter(29, 2))
//----------------------------------question number 5---------------------------------------------------
/*natural soni berilgan. Shu songacha bo’lgan mukammal sonlarni chiqaruvchi
programma tuzilsin. O`zidan boshqa bo’luvchilari yig’indisi o’ziga teng bo’lgan son
mukammal son deyiladi. Masalan: 6, 28*/
function perfectNumberFinder(number) {
    var perfectNums = [];
    for (var i = 1; i <= number; i++) {
        var sum = 0;
        for (var j = 1; j < i; j++) {
            if (i % j == 0)
                sum += j;
        }
        if (sum == i)
            perfectNums.push(sum);
    }
    return perfectNums;
}
// console.log(perfectNumberFinder(100));
//----------------------------------question number 6---------------------------------------------------
/*natural soni berilgan. Shu songacha bo’lgan tub sonlarni chiqaruvchi programma
tuzilsin.*/
function primeNumberFinder(n) {
    for (var i = 2; i <= n; i++)
        if (isPrime(i))
            console.log(i);
}
function isPrime(n) {
    for (var j = 2; j < n; j++)
        if (n % j === 0)
            return false;
    return true;
}
primeNumberFinder(10);
