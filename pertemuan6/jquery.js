$("#simpan").click(function(){
    var kode_produk = $("#kode_produk").val()
    if (kode_produk == "") {
        $("#lihat_kode_produk").text("kode produk masih kosong")
    }else{
        $("#lihat_kode_produk").text("")
    }
    
    var nama_produk = $("#nama_produk").val()
    if (nama_produk == "") {
        $("#lihat_nama_produk").text("nama produk masih kosong")
    }else{
        $("#lihat_nama_produk").text("")
    }
    
    var jenis_produk = $("#jenis_produk").val()
    if (jenis_produk == "") {
        $("#lihat_jenis_produk").text("jenis produk masih belum dipilih")
    }else{
        $("#lihat_jenis_produk").text("")
    }
    
    var harga_produk = $("#harga_produk").val()
    if (harga_produk == "") {
        $("#lihat_harga_produk").text("harga produk masih kosong")
    }else{
        $("#lihat_harga_produk").text("")
    }
    var harga_produk = $("#harga_produk").val()
    if (harga_produk == "") {
        $("#lihat_harga_produk").text("harga produk masih kosong")
    }else{
        $("#lihat_harga_produk").text("")
    }
    var stok_produk = $("#stok_produk").val()
    if (stok_produk == "") {
        $("#lihat_stok_produk").text("stok produk tinggal dikit")
    }else{
        $("#lihat_stok_produk").text("")

        var no = $("#no").val()
    if (no == "") {
        $("#lihat_no").text("no produk masih kosong")
    }else{
        $("#lihat_no").text("")
    }
        if (kode_produk !="" && nama_produk !="" && jenis_produk !="" && harga_produk !="" && stok_produk !=""){
        $("#notif").html(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Add Successfully!</strong> Data Berhasil Ditambahkan!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
        `)

        var tabel_produk = document.getElementById("tabel_produk")
        var baris = tabel_produk.insertRow(1)

        var kolom_no = baris.insertCell(0)
        var kolom_kode_produk = baris.insertCell(1)
        var kolom_nama_produk = baris.insertCell(2)
        var kolom_jenis_produk = baris.insertCell(3)
        var kolom_harga = baris.insertCell(4)
        var kolom_stok = baris.insertCell(5)

        var no = 0

        kolom_kode_produk.innerHTML = kode_produk
        kolom_kode_produk.innerHTML = nama_produk
        kolom_jenis_produk.innerHTML = jenis_produk
        kolom_harga.innerHTML = harga_produk
        kolom_stok.innerHTML = stok
        kolom_no = no++

    }
    })