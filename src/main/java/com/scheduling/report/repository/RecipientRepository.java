package com.scheduling.report.repository;

import com.scheduling.report.domain.Recipient;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Recipient entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RecipientRepository extends JpaRepository<Recipient, Long> {
}
