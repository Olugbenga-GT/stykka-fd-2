
class girlProduct{
      constructor(){
            this.key = "563492ad6f917000010000014c77ff81dc964502b3c5d4cac2cf4144"
            this.showcaseContent = document.querySelector('.showcase-content');
            this.search = document.querySelector('.search')
            this.load = document.querySelector('.load')
            this.eventsHandler()
      }

      eventsHandler(){
            document.addEventListener('DOMContentLoaded', () => this.getImage());
            this.search.addEventListener('submit', (e) =>{this.getSearchedImages(e)})
      }

     

      async getImage(){
            let baseUrl = "https://api.pexels.com/v1/search?query= girl's fashion per_page=16";

           const data = await this.fetchImages(baseUrl);
            this.GenerateHtml(data.photos) 

            console.log(data)
      }

      async fetchImages(baseUrl){
            const response =  await fetch(baseUrl,  {
                  method: 'GET', 
                  headers:{
                        Accept: 'application/json',
                        Authorization: this.key
                  }
                });
          const data = await response.json() 
          return data;
      }


      GenerateHtml(photos){
                        photos.forEach(photo => {
                                    const item = document.createElement('div');
                                    item.classList.add('card');
                                   item.innerHTML = `
                                    <img  src =  "${photo.src.medium}">
                                    <a href="#">View Product</a>
                                    `;
                                   this.showcaseContent.appendChild(item)
                        });
      }

      async getSearchedImages(e){
            const searchValue = e.target.querySelector('.search').value;
            const baseUrl = await  `https://api.pexels.com/v1/search?query= ${searchValue} per_page=16`
            const data =  await this.fetchImages(baseUrl);

            e.preventDefault();
      }
}

const showcaseContent = new girlProduct;
