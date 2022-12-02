

{

        let form = document.getElementById('fishForm');
        console.log(form);

        async function handleSubmit(event){
            console.log('Please wait for that fish data')
            event.preventDefault()

            let inputFish = event.target.fish.value;

            let fishyData = await getFishData(inputFish)
            inputFish.value = ''
            console.log(fishyData)

            buildfishTable(fishyData)


        }


        async function getFishData(fish){
            let res = await fetch(`https://www.fishwatch.gov/api/species/${fish}`)
            let data = await res.json();
            return data;

            
    }

    
        function buildfishTable(fishyData){

        }



        form.addEventListener('submit', handleSubmit);

}