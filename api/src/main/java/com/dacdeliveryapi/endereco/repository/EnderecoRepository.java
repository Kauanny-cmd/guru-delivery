package com.dacdeliveryapi.endereco.repository;

import com.dacdeliveryapi.endereco.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}
