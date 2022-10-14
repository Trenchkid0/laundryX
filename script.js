const dataDiri = document.querySelector(".aside")

function createCard([img,jenis,nama,umur,pekerjaan]){
    let code = `
    <article class="biodata">
        <div class="poto">
            <img src="${img}" alt="${jenis}">
        </div>
        <div class="isi"> 
            <h5>${nama}</h5>
            <h5>${umur}</h5>
            <h5>${pekerjaan}</h5>
        </div> 
                
    </article>
    `
    dataDiri.innerHTML += code;
}

let profile = ["./aset/photo/profil.jpg",
"foto",
"Caesario",
"19 Tahun",
"Mahasiswa"];


createCard(profile)

