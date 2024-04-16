"use strict"

// Потрібно написати функцію retry, яка приймає два параметри: асинхронну функцію, яку викликатиме і кількість спроб.
// Якщо під час виклику передана функція кидає помилку, вона викликається повторно, але не більше ніж задана кількість разів у другому параметрі.

const retry = async (asyncFunction, attempts) => {

    const { retries } = attempts;

    for (let i = 0; i < retries; i++) {
        try {
            const result = await asyncFunction();
            return result;
        } catch (error) {
            console.error(`Attempt ${i + 1} failed: ${error.message}`);
        }
    }

    throw new Error(`All attempts failed after ${retries} retries`);
}

const getUserInfo = async () => {
    const response = await fetch('https://swapi.dev/api/for/user');
    const userInfo = await response.json();
    
    return userInfo;
}
  
retry(getUserInfo, { retries: 3 })
.then(userInfo => {
    console.log('User info:', userInfo);
})
.catch(error => {
    console.error('Error:', error.message);
});