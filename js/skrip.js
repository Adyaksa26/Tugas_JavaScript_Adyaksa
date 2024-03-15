function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value
    let hobby = forms.hobby.value
    let input = 'Nama : ' + nama + '<br> Pekerjaan : ' + pekerjaan + '<br> Hobby : ' + hobby;
    let no_input = 'Maaf Form anda masih ada yang belum terisi';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;

    // tugas adalah lengkapi kode berikut dan tampilkan hasilnya ada pada html
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby
}