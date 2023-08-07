function getUserData(userId: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === '1') {
                resolve({ name: 'John Doe', age: 30 });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

function getUserAddress(user: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.name === 'John Doe') {
                resolve({ city: 'New York', country: 'USA' });
            } else {
                reject(new Error('Address not found'));
            }
        }, 1500);
    });
}

function getUserOrders(user: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.name === 'John Doe') {
                resolve([
                    { id: 1, product: 'Phone' },
                    { id: 2, product: 'Laptop' },
                ]);
            } else {
                reject(new Error('Orders not found'));
            }
        }, 2000);
    });
}

const userId = '1';

getUserData(userId)
    .then(user => {
        console.log('User:', user);
        getUserAddress(user)
            .then(address => {
                console.log('Address:', address);
                getUserOrders(user)
                    .then(orders => {
                        console.log('Orders:', orders);
                    })
                    .catch(error => {
                        console.error('Error fetching orders:', error.message);
                    });
            })
            .catch(error => {
                console.error('Error fetching address:', error.message);
            });
    })
    .catch(error => {
        console.error('Error fetching user data:', error.message);
    });

async function testAsyncAwait() {
    try {
        const user = await getUserData(userId);
        const address = await getUserAddress(user);
        const orders = await getUserOrders(address);
    } catch (e) {
        console.log('Error fetching data', e);
    }
}
