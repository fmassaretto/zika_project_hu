<?php

class ConexaoBD{

  public $conexao;
  private $HOSTNAME = "localhost";
  private $USERNAME = "root";
  private $PASS = "lmi56n";
  private $DBNAME = "zikaprojectdb";

  function __contruct() {
    try {
      $pdo = new PDO("mysql:dbname=".$this->DBNAME.";host=".$this->HOSTNAME, $this->USERNAME, $this->PASS);
      $pdo->exec("SET CHARACTER SET utf8");
      $pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );//Error Handling
      $this->$conexao = $pdo;
      echo "Conexão estabelecida!";
    } catch(PDOException $e) {
      echo $e->getMessage();
      echo "<br/>Erro ao criar tabela";//Remove or change message in production code
    }
  }

  /*
   * Returns rows from the database based on the conditions
   * @param string name of the table
   * @param array select, where, order_by, limit and return_type conditions
   */
  public function getRows($table,$conditions = array()){
      $sql = 'SELECT ';
      $sql .= array_key_exists("select",$conditions)?$conditions['select']:'*';
      $sql .= ' FROM '.$table;
      if(array_key_exists("where",$conditions)){
          $sql .= ' WHERE ';
          $i = 0;
          foreach($conditions['where'] as $key => $value){
              $pre = ($i > 0)?' AND ':'';
              $sql .= $pre.$key." = '".$value."'";
              $i++;
          }
      }

      if(array_key_exists("order_by",$conditions)){
          $sql .= ' ORDER BY '.$conditions['order_by'];
      }

      if(array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
          $sql .= ' LIMIT '.$conditions['start'].','.$conditions['limit'];
      }elseif(!array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
          $sql .= ' LIMIT '.$conditions['limit'];
      }

      $query = $this->db->prepare($sql);
      $query->execute();

      if(array_key_exists("return_type",$conditions) && $conditions['return_type'] != 'all'){
          switch($conditions['return_type']){
              case 'count':
                  $data = $query->rowCount();
                  break;
              case 'single':
                  $data = $query->fetch(PDO::FETCH_ASSOC);
                  break;
              default:
                  $data = '';
          }
      }else{
          if($query->rowCount() > 0){
              $data = $query->fetchAll(PDO::FETCH_ASSOC);
          }
      }
      return !empty($data)?$data:false;
  }

  /*
   * Insert data into the database
   * @param string name of the table
   * @param array the data for inserting into the table
   */
  public function insert($table,$data){
      if(!empty($data) && is_array($data)){
          $columns = '';
          $values  = '';
          $i = 0;
          if(!array_key_exists('created',$data)){
              $data['created'] = date("Y-m-d H:i:s");
          }
          if(!array_key_exists('modified',$data)){
              $data['modified'] = date("Y-m-d H:i:s");
          }

          $columnString = implode(',', array_keys($data));
          $valueString = ":".implode(',:', array_keys($data));
          $sql = "INSERT INTO ".$table." (".$columnString.") VALUES (".$valueString.")";
          $query = $this->db->prepare($sql);
          foreach($data as $key=>$val){
              $val = htmlspecialchars(strip_tags($val));
              $query->bindValue(':'.$key, $val);
          }
          $insert = $query->execute();
          if($insert){
              $data['id'] = $this->db->lastInsertId();
              return $data;
          }else{
              return false;
          }
      }else{
          return false;
      }
  }

  /*
   * Update data into the database
   * @param string name of the table
   * @param array the data for updating into the table
   * @param array where condition on updating data
   */
  public function update($table,$data,$conditions){
      if(!empty($data) && is_array($data)){
          $colvalSet = '';
          $whereSql = '';
          $i = 0;
          if(!array_key_exists('modified',$data)){
              $data['modified'] = date("Y-m-d H:i:s");
          }
          foreach($data as $key=>$val){
              $pre = ($i > 0)?', ':'';
              $val = htmlspecialchars(strip_tags($val));
              $colvalSet .= $pre.$key."='".$val."'";
    &nnbsp;         $i++;
          }
          if(!empty($conditions)&& is_array($conditions)){
              $whereSql .= ' WHERE ';
              $i = 0;
              foreach($conditions as $key => $value){
                  $pre = ($i > 0)?' AND ':'';
                  $whereSql .= $pre.$key." = '".$value."'";
                  $i++;
              }
          }
          $sql = "UPDATE ".$table." SET ".$colvalSet.$whereSql;
          $query = $this->db->prepare($sql);
          $update = $query->execute();
          return $update?$query->rowCount():false;
      }else{
          return false;
      }
  }

  /*
   * Delete data from the database
   * @param string name of the table
   * @param array where condition on deleting data
   */
  public function delete($table,$conditions){
      $whereSql = '';
      if(!empty($conditions)&& is_array($conditions)){
          $whereSql .= ' WHERE ';
          $i = 0;
          foreach($conditions as $key => $value){
              $pre = ($i > 0)?' AND ':'';
              $whereSql .= $pre.$key." = '".$value."'";
              $i++;
          }
      }
      $sql = "DELETE FROM ".$table.$whereSql;
      $delete = $this->db->exec($sql);
      return $delete?$delete:false;
  }
}


}
?>
