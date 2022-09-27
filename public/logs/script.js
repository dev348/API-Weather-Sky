getData();
        async function getData(){
            const response = await fetch('/sky');
            const data = await response.json();
            
            for(item of data){
                const root = document.createElement('p');
                const geo = document.createElement('div');
                geo.textContent = `${item.lat}°, ${item.long}°`;
                

                root.append(geo);
                document.body.append(root);
            }
            console.log(data);
        }
