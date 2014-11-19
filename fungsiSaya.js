function hitung(a,b) {
	a = parseInt(a);
	b = parseInt(b);
	return a+b;
}

function tampilHasil() {
	n1 = document.getElementById("angka1").value;
	n2 = document.getElementById("angka2").value;
	n3 = hitung(n1, n2);
	sisip = document.getElementById("sisip");
	sisip.innerHTML = n3;
}