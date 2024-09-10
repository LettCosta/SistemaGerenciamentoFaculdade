package com.example.sistema_gerenciamento_faculdade.config;

import java.sql.Types;

import org.hibernate.dialect.Dialect;


public class SQLiteDialect extends Dialect {

    public SQLiteDialect() {
        super();
        registerColumnTypes(Types.VARCHAR, "text");
        registerColumnType(Types.INTEGER, "integer");
        registerColumnType(Types.BOOLEAN, "boolean");
        registerColumnType(Types.FLOAT, "real");
        registerColumnType(Types.DOUBLE, "real");
        registerColumnType(Types.DECIMAL, "numeric($p, $s)");
    }

    @Override
    public GetGeneratedKeysDelegate getIdentityColumnSupport() {
        return new NoopIdentityColumnSupport();
    }

    @Override
    public String getIdentitySelectString() {
        return "select last_insert_rowid()";
    }

    @Override
    public String getIdentityColumnString() {
        return "integer";
    }
}