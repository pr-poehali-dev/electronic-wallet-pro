import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [balance, setBalance] = useState(5420);
  const [cashback, setCashback] = useState(542);
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [showCalculation, setShowCalculation] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    totalSaved: 0,
    transactions: 0,
    avgCashback: 0
  });
  const [monthlySpending, setMonthlySpending] = useState('');
  const [yearSavings, setYearSavings] = useState(0);

  const calculateCashback = () => {
    const amount = parseFloat(purchaseAmount);
    if (!isNaN(amount) && amount > 0) {
      const newCashback = amount * 0.1;
      setCashback(cashback + newCashback);
      setBalance(balance + newCashback);
      setShowCalculation(true);
      setTimeout(() => setShowCalculation(false), 3000);
    }
  };

  const calculateYearSavings = () => {
    const monthly = parseFloat(monthlySpending);
    if (!isNaN(monthly) && monthly > 0) {
      const savings = monthly * 12 * 0.1;
      setYearSavings(savings);
    }
  };

  const transactions = [
    { id: 1, type: 'purchase', merchant: 'Магазин одежды', amount: -1500, cashback: 150, date: '24 окт' },
    { id: 2, type: 'purchase', merchant: 'Продуктовый', amount: -850, cashback: 85, date: '23 окт' },
    { id: 3, type: 'purchase', merchant: 'Кафе "Утро"', amount: -420, cashback: 42, date: '23 окт' },
    { id: 4, type: 'purchase', merchant: 'Заправка', amount: -2000, cashback: 200, date: '22 окт' },
    { id: 5, type: 'purchase', merchant: 'Аптека', amount: -650, cashback: 65, date: '21 окт' },
  ];

  const chartData = [
    { month: 'Июн', value: 120 },
    { month: 'Июл', value: 280 },
    { month: 'Авг', value: 380 },
    { month: 'Сен', value: 450 },
    { month: 'Окт', value: 542 },
  ];
  const maxValue = Math.max(...chartData.map(d => d.value));

  const tariffs = [
    {
      name: 'Стандарт',
      price: 'Бесплатно',
      features: ['10% кэшбэк', 'До 5 переводов/день', 'Базовая поддержка', 'История за месяц'],
      color: 'from-primary/20 to-primary/10',
      popular: false
    },
    {
      name: 'Премиум',
      price: '499 ₽/мес',
      features: ['15% кэшбэк', 'Безлимит переводов', 'VIP поддержка 24/7', 'Полная история', 'Приоритетные выплаты'],
      color: 'from-secondary/20 to-secondary/10',
      popular: true
    },
    {
      name: 'Бизнес',
      price: '1990 ₽/мес',
      features: ['20% кэшбэк', 'API интеграция', 'Командные счета', 'Аналитика', 'Персональный менеджер'],
      color: 'from-accent/20 to-accent/10',
      popular: false
    }
  ];

  const partners = [
    { name: 'Lamoda', category: 'Одежда', cashback: '12%', logo: '👗' },
    { name: 'Ozon', category: 'Маркетплейс', cashback: '15%', logo: '🛒' },
    { name: 'Yandex.Taxi', category: 'Транспорт', cashback: '10%', logo: '🚕' },
    { name: 'Delivery Club', category: 'Еда', cashback: '18%', logo: '🍕' },
    { name: 'М.Видео', category: 'Электроника', cashback: '14%', logo: '📱' },
    { name: 'Аптека.ру', category: 'Здоровье', cashback: '11%', logo: '💊' },
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Предприниматель',
      avatar: '👩‍💼',
      rating: 5,
      text: 'За 6 месяцев накопила больше 18 000 рублей! Это реально работает. Теперь все покупки делаю только через CashWallet.',
      savings: '18 000 ₽'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'IT-специалист',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Удобнее любых банковских приложений. Кэшбэк начисляется моментально, а интерфейс просто огонь!',
      savings: '24 500 ₽'
    },
    {
      name: 'Мария Иванова',
      role: 'Дизайнер',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Перевела всю семью на этот кошелёк. За год накопили на отпуск! Спасибо за такой классный сервис.',
      savings: '45 200 ₽'
    },
    {
      name: 'Александр Ким',
      role: 'Маркетолог',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Премиум-тариф окупился за первый месяц. 15% кэшбэка — это невероятно выгодно для моих расходов.',
      savings: '31 800 ₽'
    },
    {
      name: 'Елена Смирнова',
      role: 'Фотограф',
      avatar: '👩‍📷',
      rating: 5,
      text: 'Раньше пользовалась обычными картами с 1-2% кэшбэка. Здесь 10%! Разница колоссальная.',
      savings: '12 400 ₽'
    },
    {
      name: 'Игорь Волков',
      role: 'Владелец бизнеса',
      avatar: '👔',
      rating: 5,
      text: 'Бизнес-тариф идеален для компании. API интеграция заняла 15 минут. Команда довольна!',
      savings: '127 000 ₽'
    }
  ];

  const features = [
    {
      icon: 'Wallet',
      title: '10% на каждую покупку',
      description: 'Получайте кэшбэк со всех транзакций автоматически'
    },
    {
      icon: 'Shield',
      title: 'Полная безопасность',
      description: 'Защита данных на уровне банковских стандартов'
    },
    {
      icon: 'Zap',
      title: 'Мгновенные переводы',
      description: 'Отправляйте и получайте деньги за секунды'
    },
    {
      icon: 'TrendingUp',
      title: 'Накопление растёт',
      description: 'Чем больше покупок, тем больше кэшбэк'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Регистрация',
      description: 'Создайте аккаунт за 2 минуты'
    },
    {
      step: '02',
      title: 'Привяжите карту',
      description: 'Добавьте способ оплаты'
    },
    {
      step: '03',
      title: 'Совершайте покупки',
      description: 'Платите как обычно'
    },
    {
      step: '04',
      title: 'Получайте 10%',
      description: 'Кэшбэк начисляется автоматически'
    }
  ];

  const yearStats = {
    totalSaved: 6420,
    transactions: 347,
    avgCashback: 185
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        totalSaved: Math.floor(yearStats.totalSaved * progress),
        transactions: Math.floor(yearStats.transactions * progress),
        avgCashback: Math.floor(yearStats.avgCashback * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(yearStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <nav className="flex justify-between items-center mb-16 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Wallet" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CashWallet
            </span>
          </div>
          <Button 
            onClick={() => setShowRegistration(!showRegistration)}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
          >
            {showRegistration ? 'Назад' : 'Войти'}
          </Button>
        </nav>

        {showRegistration ? (
          <section className="max-w-2xl mx-auto animate-fade-in">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-2 text-center">Создать аккаунт</h2>
              <p className="text-muted-foreground text-center mb-8">Начните получать кэшбэк уже сегодня</p>
              
              <Tabs defaultValue="register" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="register">Регистрация</TabsTrigger>
                  <TabsTrigger value="login">Вход</TabsTrigger>
                </TabsList>
                
                <TabsContent value="register" className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input id="name" placeholder="Иван Иванов" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" placeholder="Минимум 8 символов" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                    <Input id="confirm-password" type="password" placeholder="Повторите пароль" className="bg-background" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white mt-6">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </TabsContent>
                
                <TabsContent value="login" className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email или телефон</Label>
                    <Input id="login-email" placeholder="ivan@example.com" className="bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Пароль</Label>
                    <Input id="login-password" type="password" placeholder="Введите пароль" className="bg-background" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white mt-6">
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Войти
                  </Button>
                  <Button variant="link" className="w-full text-muted-foreground">
                    Забыли пароль?
                  </Button>
                </TabsContent>
              </Tabs>
            </Card>
          </section>
        ) : (
          <>
            <section className="text-center mb-20 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Электронный кошелёк<br />с 10% кэшбэком
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Каждая покупка увеличивает ваш баланс. Платите и зарабатывайте одновременно.
              </p>
              
              <Card className="max-w-md mx-auto p-8 bg-gradient-to-br from-card to-muted border-border backdrop-blur-sm animate-scale-in">
                <div className="mb-6">
                  <p className="text-muted-foreground mb-2">Текущий баланс</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {balance.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-4 mb-6 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Накоплено кэшбэка</p>
                  <p className="text-3xl font-bold text-primary">
                    +{cashback.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="space-y-3">
                  <Input
                    type="number"
                    placeholder="Введите сумму покупки"
                    value={purchaseAmount}
                    onChange={(e) => setPurchaseAmount(e.target.value)}
                    className="bg-background border-border"
                  />
                  <Button 
                    onClick={calculateCashback}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white animate-pulse-glow"
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать кэшбэк
                  </Button>
                </div>

                {showCalculation && (
                  <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg animate-scale-in">
                    <p className="text-accent font-semibold">
                      🎉 Вы получите +{(parseFloat(purchaseAmount) * 0.1).toFixed(0)} ₽ кэшбэка!
                    </p>
                  </div>
                )}
              </Card>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-4">Ваша экономия за год</h2>
              <p className="text-center text-muted-foreground mb-12">Реальные цифры, которые радуют</p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center animate-scale-in">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Wallet" size={32} className="text-white" />
                  </div>
                  <p className="text-muted-foreground mb-2">Всего накоплено</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    {animatedStats.totalSaved.toLocaleString('ru-RU')}
                  </p>
                  <p className="text-2xl font-bold text-primary">рублей</p>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="ShoppingBag" size={32} className="text-white" />
                  </div>
                  <p className="text-muted-foreground mb-2">Транзакций</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-1">
                    {animatedStats.transactions}
                  </p>
                  <p className="text-2xl font-bold text-secondary">покупок</p>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <p className="text-muted-foreground mb-2">Средний кэшбэк</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                    {animatedStats.avgCashback}
                  </p>
                  <p className="text-2xl font-bold text-accent">₽/месяц</p>
                </Card>
              </div>

              <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-card to-muted border-border animate-scale-in">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-2">Сколько я сэкономлю?</h3>
                  <p className="text-muted-foreground">Посчитайте свою выгоду от использования CashWallet</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-end">
                  <div>
                    <Label htmlFor="monthly-spending" className="text-base mb-2 block">
                      Сколько тратите в месяц?
                    </Label>
                    <Input
                      id="monthly-spending"
                      type="number"
                      placeholder="Например: 50000"
                      value={monthlySpending}
                      onChange={(e) => {
                        setMonthlySpending(e.target.value);
                        setYearSavings(0);
                      }}
                      className="bg-background border-border text-lg h-12"
                    />
                  </div>
                  
                  <Button 
                    onClick={calculateYearSavings}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-12"
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать
                  </Button>
                </div>

                {yearSavings > 0 && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 rounded-2xl animate-scale-in">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">За год вы сэкономите</p>
                      <p className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                        {yearSavings.toLocaleString('ru-RU')} ₽
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="bg-background/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground mb-1">В месяц</p>
                          <p className="text-xl font-bold text-primary">
                            {(yearSavings / 12).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                          </p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground mb-1">В неделю</p>
                          <p className="text-xl font-bold text-secondary">
                            {(yearSavings / 52).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                          </p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground mb-1">В день</p>
                          <p className="text-xl font-bold text-accent">
                            {(yearSavings / 365).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <p className="text-sm text-muted-foreground mb-3">На эти деньги можно купить:</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                          {yearSavings >= 5000 && (
                            <Badge variant="outline" className="text-sm py-2 px-3">
                              🎧 Новые наушники
                            </Badge>
                          )}
                          {yearSavings >= 10000 && (
                            <Badge variant="outline" className="text-sm py-2 px-3">
                              📱 Смартфон
                            </Badge>
                          )}
                          {yearSavings >= 30000 && (
                            <Badge variant="outline" className="text-sm py-2 px-3">
                              ✈️ Путёвка на море
                            </Badge>
                          )}
                          {yearSavings >= 60000 && (
                            <Badge variant="outline" className="text-sm py-2 px-3">
                              💻 Ноутбук
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-4">История транзакций</h2>
              <p className="text-center text-muted-foreground mb-12">Следите за своими покупками и накоплениями</p>
              
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    Рост кэшбэка
                  </h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg relative animate-scale-in" 
                             style={{ 
                               height: `${(item.value / maxValue) * 100}%`,
                               animationDelay: `${index * 0.1}s`
                             }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-primary">
                            {item.value}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.month}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="History" size={24} className="text-secondary" />
                    Последние операции
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="ShoppingBag" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{tx.merchant}</p>
                            <p className="text-xs text-muted-foreground">{tx.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{tx.amount} ₽</p>
                          <p className="text-xs text-primary">+{tx.cashback} ₽</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
              <p className="text-center text-muted-foreground mb-12">Выберите подходящий план</p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {tariffs.map((tariff, index) => (
                  <Card 
                    key={index}
                    className={`p-6 bg-gradient-to-br ${tariff.color} border-border relative animate-fade-in ${tariff.popular ? 'ring-2 ring-secondary' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tariff.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white">
                        Популярный
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                    <p className="text-3xl font-bold mb-6 text-primary">{tariff.price}</p>
                    <ul className="space-y-3 mb-6">
                      {tariff.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${tariff.popular ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-muted text-foreground hover:bg-muted/80'}`}
                    >
                      Выбрать план
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-4">Партнёры</h2>
              <p className="text-center text-muted-foreground mb-12">Получайте повышенный кэшбэк у наших партнёров</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {partners.map((partner, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{partner.logo}</div>
                        <div>
                          <h3 className="font-bold">{partner.name}</h3>
                          <p className="text-xs text-muted-foreground">{partner.category}</p>
                        </div>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {partner.cashback}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-4">Отзывы пользователей</h2>
              <p className="text-center text-muted-foreground mb-12">Более 50 000 довольных клиентов по всей России</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Накоплено</span>
                        <span className="font-bold text-primary text-lg">{testimonial.savings}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">Средняя оценка сервиса</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={32} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-2xl font-bold">4.9 из 5.0</p>
                <p className="text-sm text-muted-foreground mt-2">На основе 2 847 отзывов</p>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                Преимущества CashWallet
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={feature.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                Как это работает?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8">
                        <Icon name="ArrowRight" className="text-primary/30" size={32} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center mb-20">
              <Card className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h2 className="text-4xl font-bold mb-4">Начните зарабатывать сегодня</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Присоединяйтесь к тысячам пользователей, которые уже получают кэшбэк
                </p>
                <Button 
                  size="lg"
                  onClick={() => setShowRegistration(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6"
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Создать кошелёк
                </Button>
              </Card>
            </section>

            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
              <Card className="max-w-xl mx-auto p-8 bg-card border-border">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">support@cashwallet.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">8 (800) 555-35-35</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Поддержка 24/7</p>
                      <p className="text-muted-foreground">Онлайн чат на сайте</p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <footer className="text-center py-8 text-muted-foreground border-t border-border">
              <p>© 2024 CashWallet. Все права защищены.</p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;