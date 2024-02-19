function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }
    
    if (company.clients) {
        for (let client of company.clients) {
            if (client.name === companyName) {
                return client;
            }
            if (client.partners) {
                for (let partner of client.partners) {
                    if (partner.name === companyName) {
                        return partner;
                    }
                    // Перевіряємо для глибоких партнерів
                    const deepPartner = findValueByKey(companyName, partner);
                    if (deepPartner) {
                        return deepPartner;
                    }
                }
            }
        }
    }

    return null;
}

// Приклад використання
const result = findValueByKey('Клієнт 1.2.3', company);
console.log(result);
