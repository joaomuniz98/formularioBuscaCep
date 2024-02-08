<script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>




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
            vue.contentCep = data
            return data; 
        } else {
            console.error('Error na procura:', response.status);
        }
    } catch (error) {
        console.error('Error na requisição:', error);
    }
}


