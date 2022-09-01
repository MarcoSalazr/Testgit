class Producto {
    constructor(nombre, codigo, precio, cantidad) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
}
class Binarytree {
    constructor() {
        this.raiz = null;
    }
    agregar(nuevo) {
        if (this.raiz == null) {
            this.raiz = nuevo
        } else {
            this.agregate(nuevo, this.raiz);
        }
    }
    agregate(nuevo, nodox) {
        if (nuevo.codigo < nodox.codigo) {
            if (nodox.hijoIzquierdo == null) {
                nodox.hijoIzquierdo = nuevo;
            } else {
                this.agregate(nuevo, nodox.hijoIzquierdo)
            }
        } else {
            if (nodox.hijoDerecho == null) {
                nodox.hijoDerecho = nuevo;
            } else {
                this.agregate(nuevo, nodox.hijoDerecho);
            }
        }
    }

    search(reder) {
        if (this.raiz == null) {
            return null
        } else {
            if (this.raiz.codigo == reder) {
                return this.raiz
            } else {
                return this.searching(reder, this.raiz)
            }
        }
    }
    searching(reder, nodis) {
        if (nodis.codigo > reder) {
            if (nodis.hijoIzquierdo == null) {
                return null
            } else {
                if (nodis.hijoIzquierdo.codigo == reder) {
                    return nodis.hijoIzquierdo
                } else {
                    return this.searching(reder, nodis.hijoIzquierdo)
                }
            }
        } else {
            if (nodis.hijoDerecho == null) {
                return null;
            } else {
                if (nodis.hijoDerecho.codigo == reder) {
                    return nodis.hijoDerecho
                } else {
                    return this.searching(reder, nodis.hijoDerecho)
                }
            }
        }


    }

    inOrder() {
        if (this.raiz == null) {
            return "";
        } else {
            return this.InOrderRec(this.raiz);
        }
    }
    InOrderRec(nodox) {
        let info = "";
        if (nodox.hijoIzquierdo != null) {
            info += this.InOrderRec(nodox.hijoIzquierdo);
        }
        info += nodox.codigo + "  -  ";
        if (nodox.hijoDerecho != null) {
            info += this.InOrderRec(nodox.hijoDerecho);
        }
        return info;
    }
    preOrder() {
        if (this.raiz == null) {
            return "";
        } else
            return this.preOrderRec(this.raiz);
    }

    preOrderRec(nodox) {
        let info = nodox.codigo;
        if (nodox.hijoIzquierdo != null) {
            info += "-" + this.preOrderRec(nodox.hijoIzquierdo);
        }
        if (nodox.hijoDerecho != null) {
            info += "-" + this.preOrderRec(nodox.hijoDerecho);
        }
        return info;
    }
    postOrder() {
        if (this.raiz == null) {
            return "";
        } else {
            return this.postOrderRec(this.raiz);
        }
    }

    postOrderRec(nodox) {
        let info = "";
        if (nodox.hijoIzquierdo != null) {
            info += this.postOrderRec(nodox.hijoIzquierdo) + " - ";
        }
        if (nodox.hijoDerecho != null) {
            info += this.postOrderRec(nodox.hijoDerecho) + " - ";
        }
        info += nodox.codigo;
        return info;
    }
}
let arbol = new Binarytree();
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let codigo = document.getElementById('txtCod').value;
    let nombre = document.getElementById('txtNom').value;
    let cantidad = document.getElementById('txtCan').value;
    let precio = document.getElementById('txtPre').value;

    let nuevo = new Producto(codigo, nombre, cantidad, precio);
    arbol.agregar(nuevo)
    console.log(arbol);
    let detalles = document.getElementById('detalles');
    detalles.innerHTML = '';
    detalles.innerHTML += '<p>Se agrego producto:' + codigo + '</p>';

    document.getElementById('txtCod').value = '';
    document.getElementById('txtNom').value = '';
    document.getElementById('txtPre').value = '';
    document.getElementById('txtCan').value = '';
});
const btnInOrder = document.getElementById('btnInOrder');
btnInOrder.addEventListener('click', () => {
    let detalles = document.getElementById('arbol');
    arbol.inOrder();
    detalles.innerHTML += arbol.inOrder() + '<br>';
})
const btnPostOrder = document.getElementById('btnPostOrder');
btnPostOrder.addEventListener('click', () => {
    let detalles = document.getElementById('arbol');
    arbol.postOrder();
    detalles.innerHTML += arbol.postOrder() + '<br>';
})
const btnPreOrder = document.getElementById('btnPreOrder');
btnPreOrder.addEventListener('click', () => {
    let detalles = document.getElementById('arbol');
    arbol.preOrder();
    detalles.innerHTML += arbol.preOrder() + '<br>';
})
const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', () => {
    let detalles = document.getElementById('detalles');
    detalles.innerHTML = '';
    let reder = document.getElementById('txtSearch').value;
    let s = arbol.search(reder)
    if (s == null) {
        detalles.innerHTML += '<p>El producto no existe</p>';
    } else {
        return detalles.innerHTML += `<p> Nombre de codigo buscado: ${s.nombre}</p>`;
    }
})