package com.dacdeliveryapi.empresa.repository;

import com.dacdeliveryapi.empresa.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepository extends JpaRepository <Empresa, String> {
}

