using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace HubKafka
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;


        private  List<StackConsumer> stackConsumers;
        const string bootstrapServer = "127.0.0.1:9092";

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;

            stackConsumers = new List<StackConsumer>();
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);


                await Task.Delay(1000, stoppingToken);
            }
        }
    }
}
