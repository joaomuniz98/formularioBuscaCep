


async function searchCep(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);

    const options = {
        method: 'GET' 
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data; 
        } else {
            console.error('Error na procura:', response.status);
        }
    } catch (error) {
        console.error('Error na requisição:', error);
    }
}


