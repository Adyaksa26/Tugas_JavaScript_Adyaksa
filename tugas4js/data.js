let frm = document.getElementById('data_pegawai');
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan ----</option>`;
for (let j in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
}
let statusPilihan = ["Menikah", "Belom Menikah"];
let pilihStatus = `<option value=""> Pilih Status ----</option>`;
for (let s in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;
function data(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gaji;

    switch(jabatan){
        case 'Manager' : gaji = 15000000; break;
        case 'Asisten Manager' : gaji = 10000000; break;
        case 'Staff' : gaji = 5000000; break;
        default : gaji = 0;
    }

    let tunjanganJabatan = 0.15 * gaji;
    let bpjs = 0.10 * gaji;
    let tunjanganKeluarga = status === "Menikah" ? 0.20 * gaji : 0;
    let totalGaji = gaji + tunjanganJabatan + bpjs + tunjanganKeluarga;

    let tableHTML = `
    <style>
        table {
            border-collapse: collapse;
            border: 1px;
            width: 50%;
            font-size: 11px;
        }
        th, td {
            padding: 8px;
            text-align: center;
            border: 1px solid black;
        }
        th {
            background-color: grey;
            color: white;
        }
        tbody tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tfoot th, tfoot td {
            background-color: grey;
            color: white;
        }
    </style>
    <table>
        <thead>
            <tr>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Status</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>Tunjangan Keluarga</th>
                <th>BPJS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${nama}</td>
                <td>${jabatan}</td>
                <td>${status}</td>
                <td>${gaji.toLocaleString()}</td>
                <td>${tunjanganJabatan.toLocaleString()}</td>
                <td>${tunjanganKeluarga.toLocaleString()}</td>
                <td>${bpjs.toLocaleString()}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total Gaji</th>
                <td colspan="6">${totalGaji.toLocaleString()}</td>
            </tr>
        </tfoot>
    </table>
`;

swal({
    title: "Data Pegawai",
    content: {
        element: "div",
        attributes: {
            innerHTML: tableHTML
        }
    },
    buttons: {
        confirm: {
            text: "OK",
            closeModal: true,
        }
    }
});
}