<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>STATISCAPP</title>

    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <!-- chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <link rel="stylesheet" href="style.css">

    <script src="script.js"></script>
</head>
<body>
    <main class="mx-auto my-5 p-5 bg-white rounded container">
        <header>
            <h1 class="mb-5">STATISCAPP</h1>
        </header>
        
        <section class="stage" style="display: block">
            <h4 class="text-center mb-5">Coloque seus dados</h4>
            <button class="d-block mx-auto p-3 btn btn-primary" onclick="nextStage(1)">Selecionar</button>
        </section>

        <section class="stage">
            <p class="text-center text-muted">Processando dados enviados pelo cliente</p>
        </section>
        
        <section class="stage">
            <div class="container-fluid p-5 bg-primary text-white text-center">
                <h1>Selecione o grafico que você deseja exibir os dados</h1>
                <p>Os graficos estão sujeitos aos dados que você selecionou</p> 
            </div>
            
            <div class="container mt-5">
                <div class="row">
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart1"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart2"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart3"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart4"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart5"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart6"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart7"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart8"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 btn">
                        <div class="card">
                            <div class="card-body" onclick="nextStage(3)">
                                <h3>Gráfico xxxxx</h3>        
                                <p>Descrição do grafico</p>
                                <div>
                                    <canvas id="myChart9"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="stage">
            <p class="text-center text-muted">Gerando grafico escolhido com os dados informados</p>
        </section>

        <section class="stage">
            <h4>Gráfico:</h4>

            <h4>Opções:</h4>
            <div class="btn-group">
                <button type="button" class="btn btn-primary">Salvar dados</button>
                <button type="button" class="btn btn-primary">Importar gráfico</button>
                <button type="button" class="btn btn-primary" onclick="nextStage(0)">Recomeçar</button>
            </div>

            <h4>Dados fornecidos:</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        for ($i=0; $i < 100; $i++):
                    ?>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                    <?php
                        endfor;
                    ?>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>