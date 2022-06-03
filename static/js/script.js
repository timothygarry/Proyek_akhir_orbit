const hero = document.querySelector(".section-deskripsi");
const anggota = document.querySelector(".anggota");
const judul_kerja = document.querySelector(".judul_kerja_kelompok");

window.onscroll = function() {Scrolling()};



function Scrolling(){
    const test = document.documentElement.scrollTop;
    console.log(test)

    if (document.documentElement.scrollTop >= 150){
        hero.classList.add("test");
        if (document.documentElement.scrollTop >= 918) {
            anggota.classList.add("test");
            if (document.documentElement.scrollTop >= 2123) {
                judul_kerja.classList.add("test");
            }else {
                judul_kerja.classList.remove("test");
            }
        }else {
            anggota.classList.remove("test");
        }
    }else {
        hero.classList.remove("test");
    }
}

