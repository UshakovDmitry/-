::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 16px;
}
::-webkit-scrollbar-thumb {
  background-color: #c4c9c6;
  border-radius: 16px;
}

.table-wrapper {
  white-space: nowrap;
  position: relative;
  border-radius: 16px;  /* Добавлено */
  width: 100%;
  height: auto;
}

.table-component {
  border-collapse: collapse;
  background-color: white;
  border: 1px solid var(--tertiary-light-mode-border, rgba(35, 54, 45, 0.12));
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 16px;  /* Добавлено */
  overflow: hidden;  /* Добавлено */
}

thead {
  position: sticky;
  top: 0;
}

.table-thead-tr {
  padding-right: 20px;
  border-bottom: 1px solid #e4e7e5;
  background-color: #f1f7f4;
  border-radius: 16px;  /* Добавлено */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
}

.table-thead-tr th:first-child {
  border-top-left-radius: 16px;  /* Добавлено */
}
.table-thead-tr th:last-child {
  border-top-right-radius: 16px;  /* Добавлено */
}

.table-tbody-tr {
  height: 80px;
}

.table-tbody-tr td:first-child {
  border-top-left-radius: 16px;  /* Добавлено */
}
.table-tbody-tr td:last-child {
  border-top-right-radius: 16px;  /* Добавлено */
}
.table-tbody-tr:last-child td:first-child {
  border-bottom-left-radius: 16px;  /* Добавлено */
}
.table-tbody-tr:last-child td:last-child {
  border-bottom-right-radius: 16px;  /* Добавлено */
}

.table-tbody-tr-td {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #23362d;
  border-bottom: 1px solid #e4e7e5;
  text-align: left;
}

.paginator__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

