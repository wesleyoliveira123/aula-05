const lista_de_tarefas=[]

while(true){
    const opcao = Number(prompt("Digite 1 para adicionar, 2 para listar tarefas, 3 para remover ou 4 para marcar como concluída"))
    if (opcao===1){
        const tarefa=prompt("digite a tarefa que deseja adicionar.")
        lista_de_tarefas.push(tarefa)
        alert(`tarefa ${tarefa} adicionada com sucesso!`)
    }

    else if (opcao===2){
        alert(lista_de_tarefas)

    }else if (opcao === 3) {
        const tarefa = prompt("Digite o nome exato da tarefa que deseja remover.");
        
        const index = lista_de_tarefas.indexOf(tarefa);
        if (index !== -1) {
          lista_de_tarefas.splice(index, 1);
          alert(`Tarefa "${tarefa}" removida com sucesso!`);
        } else {
          alert("Tarefa não encontrada.");
        }
        
      } else if (opcao === 4) {
        const tarefa = prompt("Digite o nome exato da tarefa que deseja marcar como concluída.");
        
        const index = lista_de_tarefas.indexOf(tarefa);
        if (index !== -1) {
          lista_de_tarefas[index] = "✅ " + lista_de_tarefas[index];
          alert(`Tarefa "${tarefa}" marcada como concluída!`);
        } else {
          alert("Tarefa não encontrada.");
        }
    
      } else {
        alert("Opção inválida. Tente novamente.");
      }
    }