package com.dacdeliveryapi.pedido.repository;

import com.dacdeliveryapi.pedido.model.ItemPedido;
import com.dacdeliveryapi.pedido.model.ItemPedidoKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPedidoRepository extends JpaRepository<ItemPedido, ItemPedidoKey> {
}
