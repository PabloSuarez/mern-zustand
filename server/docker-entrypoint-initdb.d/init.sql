-- Usa variables de entorno en tus comandos SQL
DO $$
BEGIN
   -- Crea la base de datos si no existe
   IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = '$$POSTGRES_DB$$') THEN
      CREATE DATABASE $$POSTGRES_DB$$;
   END IF;

   -- Crea el usuario si no existe
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = '$$POSTGRES_USER$$') THEN
      CREATE USER $$POSTGRES_USER$$ WITH ENCRYPTED PASSWORD '$$POSTGRES_PASSWORD$$';
      ALTER ROLE $$POSTGRES_USER$$ SET client_encoding TO 'utf8';
      ALTER ROLE $$POSTGRES_USER$$ SET default_transaction_isolation TO 'read committed';
      ALTER ROLE $$POSTGRES_USER$$ SET timezone TO 'UTC';
      GRANT ALL PRIVILEGES ON DATABASE $$POSTGRES_DB$$ TO $$POSTGRES_USER$$;
   END IF;
END;
$$;
