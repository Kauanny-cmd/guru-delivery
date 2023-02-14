package com.dacdeliveryapi.pedido.dto;

import com.dacdeliveryapi.pedido.model.*;
import lombok.Data;

import java.util.ArrayList;

@Data
public class PedidoDto {

    private FormaPagamento formaPagamento;
    private float troco;
    private String cpfCliente;
    private String cnpjEmpresa;
    private Long idEndereco;
    private ArrayList<ItemPedido> itens;

}
