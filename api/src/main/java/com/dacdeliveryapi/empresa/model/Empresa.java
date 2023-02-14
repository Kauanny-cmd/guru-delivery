package com.dacdeliveryapi.empresa.model;

import com.dacdeliveryapi.empresa.cardapio.model.Cardapio;
import com.dacdeliveryapi.pedido.model.Pedido;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Empresa {

    @Id
    private String cnpj;
    private String nome;
    private String telefone;
    @Embedded
    private Endereco endereco;

    @OneToOne(mappedBy = "empresa")
    private Cardapio cardapio;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_empresa")
    private List<Pedido> pedidos;
}
